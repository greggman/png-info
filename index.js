'use strict';

var Buffer = require('buffer').Buffer;
var bufferEqual = require('buffer-equal');

var IHDR = require('./chunks/IHDR');

var PNG_SIGNATURE = new Buffer([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);

/**
 * Create an PNGInfo object
 * @param {Buffer} data The PNG raw data
 * @constructor
 */
function PNGInfo(data) {
  if (!Buffer.isBuffer(data)) {
    throw new Error('PNGInfo must be initialized with a buffer');
  }
  var signature = data.slice(0, 8);
  if (!bufferEqual(signature, PNG_SIGNATURE)) {
    throw new Error('data does not start with PNG signature');
  }

  this.data = data;
  this.chunks = {
    IHDR: new IHDR(data, 8)
  };
}

/**
 * Get the dimensions of the PNG
 * @returns {{width: number, height: number}} the dimensions
 */
PNGInfo.prototype.getDimensions = function getDimensions() {
  return {
    width: this.chunks.IHDR.width,
    height: this.chunks.IHDR.height
  };
};

module.exports = PNGInfo;
