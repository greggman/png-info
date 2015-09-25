# png-info
Get information about a PNG from its headers

# Install

`npm install png-info`

# Usage

Most common lookups will have methods on pngInfo:

```javascript
var image = fs.readFileSync('path/to/image.png');
var pngInfo = new PNGInfo(image);
var dimensions = pngInfo.getDimensions();
// {width: 100, height: 150 }
});
```

If you want to go deeper, you can access chunk data directly:

```javascript
var image = fs.readFileSync('path/to/image.png');
var pngInfo = new PNGInfo(image);
var width = pngInfo.chunks.IHDR.width;
// 100
```

# Status

Only IHDR is currently implemented, please feel free to add any other chunks that you need:

  - [x] IHDR
  - [ ] PLTE
  - [ ] tRNS
  - [ ] gAMA
  - [ ] cHRM
  - [ ] sRGB
  - [ ] iCCP
  - [ ] tEXt
  - [ ] bKGD
  - [ ] pHYs
  - [ ] sBIT
  - [ ] sPLT
  - [ ] hIST
  - [ ] tIME

# Development

`npm test`

Please keep coverage at 100%