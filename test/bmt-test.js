'use strict';

var trans = require('../lib/trans');
var expect = require('chai').expect;
var buf = new Buffer('hello world');
var oldBuf = new Buffer('hello world');
var newBuf = trans.invertTransform(buf, (err, data) => {
  console.log('invert has occured');
}, 0, 0);

describe('testing transform function', function() {

  it('testing invertTransform function is changing the buffer', function() {
    expect(oldBuf).not.to.eql(newBuf);
  });
});

// function log () {
//     console.log(buf);
// }
//
//
// function test() {
//   trans.invertTransform(buf, (err, data) => {
//     // changed = buf;
//     console.log('invert has occured');
//     process.nextTick(log);
//   }, 0, 0);
// }
//
// test();
