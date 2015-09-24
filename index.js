'use strict';

/**
 * Create an PNGInfo object
 * @param {Buffer} data The PNG raw data
 * @constructor
 */
function PNGInfo(data) {
  this.data = data;
}

/**
 * Get the dimensions of the PNG
 * TODO: Implement this
 * @returns {{width: number, height: number}} the dimensions
 */
PNGInfo.prototype.getDimensions = function getDimensions() {
  return {
    width: 0,
    height: 0
  }
};

module.exports = PNGInfo;
