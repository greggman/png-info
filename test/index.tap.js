'use strict';
var fs = require('fs');
var path = require('path');

var test = require('tape');

var PNGInfo = require('../index');

var oneByOne = path.join(__dirname, 'images', '1x1.png');
var uberBadge = path.join(__dirname, 'images', 'uber.png');
var naughtyJPG = path.join(__dirname, 'images', '1x1.jpg');

function loadImage(filePath) {
  return fs.readFileSync(filePath);
}

/* eslint-disable no-new */
test('It should only accept buffers', function testBuffer(t) {
  t.plan(1);
  t.throws(function testJPG() {
    new PNGInfo('test');
  });
});

test('It should not parse thigns that aren\'t pngs', function testNonPNG(t) {
  t.plan(1);
  t.throws(function testJPG() {
    var image = loadImage(naughtyJPG);
    new PNGInfo(image);
  });
});
/* eslint-enable no-new */

test('It should get the dimensions of an image', function getDimensions(t) {
  t.plan(2);

  var image = loadImage(oneByOne);
  var pngInfo = new PNGInfo(image);
  t.deepEquals(pngInfo.getDimensions(), {
    width: 1,
    height: 1
  });

  var uber = loadImage(uberBadge);
  var uberInfo = new PNGInfo(uber);
  t.deepEquals(uberInfo.getDimensions(), {
    width: 100,
    height: 100
  });
  t.end();
});
