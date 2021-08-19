const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const sentence = {};
  for (const letter of string) {
    if (letter !== ' ') {
      if (letter in sentence) {
        sentence[letter] += 1;
      } else {
        sentence[letter] = 1;
      }
    }
  }
  return sentence;

};

assertEqual((countLetters('LHL')),{L: 2, H: 1});






