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

module.exports = countLetters;




