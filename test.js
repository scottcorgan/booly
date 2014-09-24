var booly = require('./index.js');
var test = require('tape');

test('converts values to true', function (t) {
  
  t.ok(booly(1), 'number');
  t.ok(booly(true), 'true boolean');
  t.ok(booly('true'), 'true string');
  
  t.end();
});

test('converts values to false', function (t) {
  
  t.notOk(booly(0), 'number');
  t.notOk(booly(false), 'false boolean');
  t.notOk(booly('false'), 'false string');
  
  t.end();
});