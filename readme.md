# object-array-converter

## Install

```
npm i --save object-array-converter
```

## Usage

```
var convert = require('object-array-converter');
```

### Convert an object's keys and values to an array of objects

```
var obj = { a: 'weee', b: 'wooo', c: 'pooop' };

convert.toArray(obj);

/*

Returns:

[
  { key: 'a', value: 'weee' },
  { key: 'b', value: 'wooo' },
  { key: 'c', value: 'pooop' }
]

*/
```

### Convert an array of objects to an object

```
var arr = [
  { key: 'a', value: 'weee' },
  { key: 'b', value: 'wooo' },
  { key: 'c', value: 'pooop' }
];

convert.toObject(arr);

/*

Returns:

{ a: 'weee', b: 'wooo', c: 'pooop' }

*/
```

## License
MIT
