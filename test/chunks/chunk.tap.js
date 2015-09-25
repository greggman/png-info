'use strict';

var test = require('tape');
var Buffer = require('buffer').Buffer;

var Chunk = require('../../chunks/chunk');

/* eslint-disable no-inline-comments */
var CHUNK_DATA = new Buffer([
  0x00, 0x00, 0x00, 0x0D, // Length
  0x49, 0x48, 0x44, 0x52, // IHDR
  0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01, 0x01, 0x03, 0x00, 0x00, 0x00, // DATA
  0x25, 0xDB, 0x56, 0xCA // CRC
]);

/* eslint-disable no-new */
test('It should throw if data if not buffer', function testInvalidData(t) {
  t.plan(1);
  t.throws(function notData() {
    new Chunk('abcd');
  });
});

test('It should throw if data is not long enough', function testInvalidData(t) {
  t.plan(1);
  t.throws(function notData() {
    new Chunk(new Buffer(11));
  });
});
/* eslint-enable no-new */

test('It should get the correct chunk properties', function testProperties(t) {
  t.plan(4);
  var chunk = new Chunk(CHUNK_DATA);
  t.equals(chunk.length, CHUNK_DATA.length);
  t.equals(chunk.dataLength, 13);
  t.equals(chunk.type, 'IHDR');
  t.deepEquals(chunk.CRC, new Buffer([0x25, 0xDB, 0x56, 0xCA]));
});
