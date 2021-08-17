const assertEqual = function(actual, expected) {
  console.assert(actual === expected);
  console.assert(actual !== expected);
};

const tail = function() {
_.tail([1, ,2 ,3]);
}

const result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(result, ['Lighthouse', 'Labs']);

const words = ['Yo Yo', 'Lighthouse', 'Labs'];
tail(words);
assertEqual(words.length, 3);