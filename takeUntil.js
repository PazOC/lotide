const takeUntil = function(array, callback) {
  let myArray = [];
  for (let element of array) {
    if (!callback(element)) {
      myArray.push(element);
    } else {
      break;
    }
  }
  return myArray;
};


module.exports = takeUntil;