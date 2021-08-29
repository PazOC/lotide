const without = require("../without");

assertArraysEqual(without([1, 2, 3], [1]), true);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), true);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);

assertArraysEqual(words, ["hello", "world", "lighthouse"], true);