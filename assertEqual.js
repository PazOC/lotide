const assertEqual = function(actual, expected) {
  console.assert(actual === expected);
  console.assert(actual !== expected);
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
