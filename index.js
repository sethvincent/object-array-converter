exports.toArray = function (obj) {
  var obj = obj || {};
  var result = [];

  Object.keys(obj).forEach(function (key, i) {
    result.push({ key: key, value: obj[key] });
  });

  return result;
};

exports.toObject = function (arr) {
  var arr = arr || [];
  var result = {};

  arr.forEach(function (obj, i) {
    result[obj.key] = obj.value;
  });

  return result;
}
