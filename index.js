var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({prop: 1, prop2: 2})
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
<<<<<<< HEAD
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
=======
}
>>>>>>> efe4d2176338a60bd94fe7abf8e9e0e9d0273753
