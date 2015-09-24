'use strict';
var fs = require('fs');
var path = require('path');

var test = require('tape');

var PNGInfo = require('../index');

var oneByOne = path.join(__dirname, 'images', '1x1.png');

function loadImage(path) {
  return fs.readFileSync(path);
}

test('It should get the dimensions of an image', function getDimensions(t) {
  t.plan(1);
  var image = loadImage(oneByOne);
  var pngInfo = new PNGInfo(image);
  t.equals(pngInfo.getDimensions(), {
    width: 1,
    height: 1
  });
  t.end();
});
