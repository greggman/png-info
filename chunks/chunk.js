'use strict';
var Buffer = require('buffer').Buffer;

var MINIMUM_CHUNK_SIZE = 12;

/**
 * Get an object representing a chunk.
 * Each chunk is:
 *  length: 4
 *  type: 4
 *  body:length
 *  CRC: 4
 * @param {Buffer} data The buffer, containing at least the whole of this chunk
 * @param {Number} [offset=0] offset of data to start reading from.
 * @constructor
 */
function Chunk(data, offset) {
  offset = offset || 0;
  if (!Buffer.isBuffer(data) || data.length < MINIMUM_CHUNK_SIZE) {
    throw new Error('Invalid data buffer for chunk');
  }

  this.dataLength = data.readUInt32BE(offset);
  this.length = this.dataLength + 12;

  var typeStart = offset + 4;
  var dataStart = offset + 8;
  var dataEnd = offset + 8 + this.dataLength;
  var crcEnd = dataEnd + 4;

  this.type = data.toString('ascii', typeStart, dataStart);
  this.chunkData = data.slice(dataStart, dataEnd);
  this.CRC = data.slice(dataEnd, crcEnd);
}

module.exports = Chunk;
