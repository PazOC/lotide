const sum = function(a, b) {
  return a + b;
};

console.assert(sum(1, 2) === 3);
console.assert(sum(1, 20) === 3);

const sumBuggy = function(a, b) {
  return a * b;
};

console.assert(sumBuggy(1, 2) === 3);



const assertEqual = function(actual, expected) {
  console.assert(actual === expected);
  console.assert(actual !== expected);
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

// const name = 'Alice';
// console.log('Hello, ' + name + '!');

const name = 'Alice';
console.log(`Hello, ${name}!`);
