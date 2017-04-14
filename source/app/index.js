/* eslint-disable */
import ƒ from 'flavor-js';
/* eslint-enable */

import '../index.html';
import '../styles/app.scss';
import Game from './classes/Game';

// require('babel-runtime/core-js/promise').default = require('bluebird');

window.onload = new Game();
