"use strict";

/**
 * Find the shortest string in an array.
 * In the case of a tie, returns the earlier string in the array.
 *
 * @param {string[]} stringArr - array of strings
 * @returns {string} - the shortest string
 */
function findShortestString(stringArr) {
  let shortestString = stringArr[0];
  for (let str of stringArr) {
    if (str.length < shortestString.length) {
      shortestString = str;
    }
  }
  return shortestString.length;
}

module.exports = findShortestString;

(findShortestString(["it", "is", "a", "nice", "day"]), "a");
(findShortestString(["why", "hello", "to", "you"]), "to");
(findShortestString(["brave", "dance"]), "brave");
