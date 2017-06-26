var recipes = {}

var updateObjectWithKeyAndValue = (object, key, value) => {
  return Object.assign({}, object, { [key]: value });
}

var destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
  object[key] = value;
  return object;
}

var deleteFromObjectByKey = (object, key) => {
  var new_obj = Object.assign({}, object);
  return delete new_obj.key;
}

var destructivelyDeleteFromObjectByKey = (object, key) => {
  delete object[key];
  return object;
}
