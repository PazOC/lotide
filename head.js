const head = function(headArr) {
  return headArr.splice(1);
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
  console.assert(actual === expected);
  console.assert(actual !== expected);
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');