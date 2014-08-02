var convert = require('./index');

var rows = [
  { wat: 'weeee', pizza: 'wokowokow', poop: 'ok' },
  { wat: 'pooooo', pizza: 'wokowokow', poop: 'ok' },
  { wat: 'okkkkkk', pizza: 'wokowokow', poop: 'ok' }
];

var converted = [];
rows.forEach(function (row, i) {
  converted.push(convert.toArray(row));
});

console.log(converted);

/*

returns:


[
  [ { key: 'wat', value: 'weeee' },
    { key: 'pizza', value: 'wokowokow' },
    { key: 'poop', value: 'ok' } ],
  [ { key: 'wat', value: 'pooooo' },
    { key: 'pizza', value: 'wokowokow' },
    { key: 'poop', value: 'ok' } ],
  [ { key: 'wat', value: 'okkkkkk' },
    { key: 'pizza', value: 'wokowokow' },
    { key: 'poop', value: 'ok' } ]
 ]

*/
