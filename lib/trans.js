'use strict';

function invertTransform(data, cb, indexNum, pixelStart) {
  var pixelStart = pixelStart != null ? pixelStart: 10;//if no value is passed in for pixelStart pixelStart will equal null
  var pixelArrayStart = data.readUInt32LE(pixelStart); // determine start of pixel data
  var i = indexNum != null ? indexNum: 54; //this statment says var i = indexNum if indexNum exists or var i = 54
  console.log(data.length);
  if (pixelArrayStart === 54) {
    pixelArrayStart = data.length;
    console.log("non-palette bitmap");
  } else {
    // pixelArrayStart = data.readUInt32LE(10);
    pixelArrayStart = data.length;
    console.log("palette bitmap");
  }
  // execute invertTransform, offset the first 54 bytes containing header info
  for ( ; i < pixelArrayStart; i++) {

    data[i] = 255 - data[i]; //changing every value in the data buffer and the 255 inverts it.
  }
  cb(null, data);
  return data;
}

exports.invertTransform = invertTransform;
