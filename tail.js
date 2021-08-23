const assertEqual = require('./assertEqual.js');

const tail = function(myArray) {
  return myArray.slice(1);
};

module.exports = tail;
