import { Elements } from 'elements-js';
import Game from './Game';
import config from '../config';
import Snowfall from './Examples/Snowfall';

export default class GameCore extends Elements.Element {

  drawElements() {
    this.background = new Elements.Element({
      parent: Game.STAGE,
      size: {
        width: config.canvas.width,
        height: config.canvas.height,
      },
      fill: '#000',
      align: 'top left',
    });
    this.image = new Elements.ImageElement({
      parent: this.background,
      image: Game.IMAGES.background,
      align: 'top center',
      scale: 1.5,
    });

    this.snowfall = new Snowfall();
  }
}
