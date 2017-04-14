/**
 * @namespace Config
 *
 * @property {array} manifest - array for preloaded files
 *
 * @property {object} canvas - default canvas settings
 * @property {string} canvas.id - canvas DOM ID
 * @property {number} canvas.width - canvas width
 * @property {number} canvas.height - canvas height
 *
 * @property {object} stage - default stage settings
 * @property {number} stage.fps - stage framerate
 */

module.exports = {
  manifest: [
    { src: 'assets/winter_bg.jpg', id: 'background' },
  ],
  canvas: {
    id: 'main',
    width: 1080,
    height: 1920,
  },
  stage: {
    fps: 40,
  },
};
