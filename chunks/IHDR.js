'use strict';

var util = require('util');

var Chunk = require('./chunk');

function IHDR(data, offset) {
  Chunk.call(this, data, offset);

  this.width = this.chunkData.readUInt32BE(0);
  this.height = this.chunkData.readUInt32BE(4);
  this.bitDepth = this.chunkData.readUInt8(5);
  this.colorType = this.chunkData.readUInt8(6);
  this.compressionMethod = this.chunkData.readUInt8(7);
  this.filterMethod = this.chunkData.readUInt8(8);
  this.interlaceMethod = this.chunkData.readUInt8(9);
}

util.inherits(IHDR, Chunk);

module.exports = IHDR;
