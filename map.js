const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};

const eqArrays = function(array1, array2) {
  let output = true;
  if (array1.length !== array2.length) return false;
  for (let element = 0; element < array1.length; element += 1) {
    if (Array.isArray(array1[element]) || Array.isArray(array2[element])) {
      output = output && eqArrays(array1[element], array2[element]);
    } else if (array1[element] !== array2[element]) {
      output = output && false;
    }
  }
  return output;
};

const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callBack){
  const results = [];
  for (let item of array) {
    results.push(callBack(item));
  }
  return results
};

const results1 = map(words, word => word[0]);
console.log(results1);


assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map([1, 2, 3], num => num * 2), [2, 4, 6]);
assertArraysEqual(map([true, true, false, false], boolean => !boolean), [ false, false, true, true]);



