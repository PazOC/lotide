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


const middle = function(array) {
    //if 1 or 2 elements return empty array
    if (array.length <= 2) {
      return [];
      // if odd numbers, a single element should be returned
    } else if (array.length % 2 === 0) {
      return [array[Math.ceil(array.length / 2) - 1], array[Math.ceil(array.length / 2)]]; // if odd numbers, a single element should be returned 
    } else {
      return [array[Math.floor(array.length / 2)]]; //if even numbers, return 2 elements
    }                            
};

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5]))// => [3]

console.log(middle([1, 2, 3, 4, 5, 6])) // => [2, 3]
 // => [3, 4]
