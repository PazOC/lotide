const assertEqual = function(actual, expected) {
  console.assert(actual === expected);
  console.assert(actual !== expected);
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const head = function() {
  return [0];
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');

