exports.toArray = function (obj) {
  obj = obj || {}
  var result = []

  Object.keys(obj).forEach(function (key, i) {
    result.push({ key: key, value: obj[key] })
  })

  return result
}

exports.toObject = function (arr) {
  arr = arr || []
  var result = {}

  arr.forEach(function (obj, i) {
    if (typeof obj === 'object' && obj.key && obj.value) {
      result[obj.key] = obj.value
    } else {
      result[i] = obj
    }
  })

  return result
}
