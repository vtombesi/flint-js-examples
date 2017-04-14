import { Elements } from 'elements-js';
import Game from './Game';
import config from '../config';

export default class GameCore extends Elements.Element {

  drawElements() {
    console.log('init');
    this.background = new Elements.Element({
      parent: Game.STAGE,
      size: {
        width: config.canvas.width,
        height: config.canvas.height,
      },
      fill: '#000',
      align: 'top left',
    });



  }

}
