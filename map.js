const map = function(array, callBack) {
  const results = [];
  for (let item of array) {
    results.push(callBack(item));
  }
  return results;
};

module.exports = map;



