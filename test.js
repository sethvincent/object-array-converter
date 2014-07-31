var test = require('tape');
var convert = require('./index');

var obj = { a: 'weee', b: 'wooo', c: 'pooop' };

var arr = [
  { key: 'a', value: 'weee' },
  { key: 'b', value: 'wooo' },
  { key: 'c', value: 'pooop' }
];

test('convert object keys/values to array of objects', function (t) {
  t.plan(1);
  t.deepEqual(convert.toArray(obj), arr);
});

test('convert array of objects to object keys/values', function (t) {
  t.plan(1);
  t.deepEqual(convert.toObject(arr), obj);
});
