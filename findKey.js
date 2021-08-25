const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`Assertion failed: ${array1} !== ${array2}`);
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

// Implement the function findKey which takes in an object and a callback. 
//It should scan the object and return the first key for which the callback returns a truthy value.
// If no key is found, then it should return undefined.
const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) return key;
  }  
};


findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

assertArraysEqual(findKey(key, ))

