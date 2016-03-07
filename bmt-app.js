'use strict';

const fs = require('fs');
var trans = require('./lib/trans');
var changed;

var file = __dirname + '/' + process.argv[2];
var transformArg = process.argv[3];

if(transformArg === 'invertTransform') {
  fs.readFile(file, (err, data) => { //since no encoding is specified raw buffer is returned.
    if (err) throw err;
    trans.invertTransform(data, (err, data) => {
      changed = data;
      console.log('invert has occured');
      writeToFile();
    });
  });
} else {
  console.log ('Enter a transformArg of invertTransform ');
}

function writeToFile() {
  var newFile = file.slice(0, -3) + transformArg + '.bmp';
  fs.writeFile(newFile, changed, (err) => {
    if (err) throw err;
    console.log('file saved as ' + newFile);
  });
}

//app file, image path, transform arg
