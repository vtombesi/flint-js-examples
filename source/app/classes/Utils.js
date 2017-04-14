/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */

/**
 * Utility functions.
 * @module Utility
 */

/**
 * @alias module:Utility
 */
const Utils = module.exports = {};

/**
 * Set height and width of DOM element
 * @param {object} Element DOM Element
 * @param {number} Width Width
 * @param {number} Height Height
 * @param {boolean} CSS If true sets css styles
 */
Utils.setWH = function (elem, w, h, css = false) {
  elem.width = w;
  elem.height = h;

  if (css) {
    elem.style.width = `${w}px`;
    elem.style.height = `${h}px`;
  }
};

/**
 * Scale element equally.
 * @param {object} Element Element to change
 * @param {number} Amount Scale ratio
 */
Utils.scaleXY = function (elem, amount) {
  elem.scaleX = elem.scaleY = amount;
};
