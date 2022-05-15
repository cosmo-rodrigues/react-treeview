// https://gist.github.com/Ann-MarieKemp/4ecd0fbe5c4a344ff348de1772fc3b0f
export function flattenObject(oldObject) {
  const newObject = {};

  flattenHelper(oldObject, newObject, '');

  return JSON.stringify(newObject);

  function flattenHelper(currentObject, newObject, previousKeyName) {
    for (let key in currentObject) {
      let value = currentObject[key];

      if (value.constructor !== Object) {
        if (previousKeyName == null || previousKeyName == '') {
          newObject[key] = value;
        } else {
          if (key == null || key == '') {
            newObject[previousKeyName] = value;
          } else {
            newObject[previousKeyName + '.' + key] = value;
          }
        }
      } else {
        if (previousKeyName == null || previousKeyName == '') {
          flattenHelper(value, newObject, key);
        } else {
          flattenHelper(value, newObject, previousKeyName + '.' + key);
        }
      }
    }
  }
}
