const findKeyByValue = require('../findKeyByValue');



const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  musical: "Glee",
  sitcom: "The Office"

};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Glee"), "musical");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Office"), "sitcom");