const map = require('../map');



const words = ["ground", "control", "to", "major", "tom"];


const results1 = map(words, word => word[0]);
console.log(results1);


assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map([1, 2, 3], num => num * 2), [2, 4, 6]);
assertArraysEqual(map([true, true, false, false], boolean => !boolean), [ false, false, true, true]);