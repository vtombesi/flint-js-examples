import { PreloadJS, TweenJS, Elements } from 'elements-js';

import config from '../config';
import Game from './Game';

/**
 * Preload class used for loading content
 */
export default class Preload {

  /**
   * Calling init method
   * @returns {object} Promise Preload promise
   */
  constructor() {
    return new Promise((resolve) => {
      this.init(resolve);
    });
  }

  /**
   * Sets up game loader. Resolve promise when loading is complete.
   * @param {object} Resolve Promise resolve
   */
  init(resolve) {
    this.createTextLoader();

    this.loader = new PreloadJS.LoadQueue(false);
    this.loader.on('error', this.constructor.handleFileError, this);
    this.loader.on('fileload', this.constructor.handleFileLoad, this);
    this.loader.on('progress', this.handleProgress.bind(this), this);
    this.loader.on('complete', this.handleComplete.bind(this, () => resolve()));
    this.loader.loadManifest(config.manifest);
  }

  /**
   * Create graphic loader for manifest.
   */
  createTextLoader() {
    this.graphicLoader = new Elements.Element({
      parent: Game.STAGE,
      size: {
        width: config.canvas.width,
        height: config.canvas.height,
      },
      fill: '#000',
      align: 'center middle',
    });

    this.preloaderText = new Elements.TextElement({
      parent: this.graphicLoader,
      text: '0%',
      color: '#fff',
      align: 'center middle',
    });
  }

  /**
   * Erase graphic loader.
   */
  eraseTextLoader() {
    Game.STAGE.removeChild(this.graphicLoader);
    this.graphicLoader = null;
  }

  /**
   * Handle errors from loader.
   * @param {object} Event Error event.
   */
  static handleFileError(e) {
    console.warn(`Error: ${e.title}`);
    console.log(e);
  }

  /**
   * Pushing loaded object to Game.IMAGES if file is image.
   * @param {object} Event Loaded item event.
   */
  static handleFileLoad(e) {
    if (e.item.type === 'image') {
      Game.IMAGES[e.item.id] = e.result;
    }
  }

  /**
   * Shows loading progress.
   */
  handleProgress() {
    const percent = Math.round(this.loader.progress * 100);
    this.preloaderText.setText(`Loading ${percent} %`);
  }

  /**
   * Fires when loading is complete.
   * Slides up graphic loader and executes callback.
   * @param {object} Callback Callback - resolve loader promise
   */
  handleComplete(cb) {
    TweenJS.Tween.get(this.graphicLoader)
      .to({ alpha: 0 }, 1000, TweenJS.Ease.cubicInOut)
      .call(this.eraseTextLoader)
      .call(cb);
  }

}
