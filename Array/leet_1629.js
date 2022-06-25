// https://leetcode.com/problems/slowest-key/

/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
  releaseTimes = releaseTimes.map((time, i, arr) => {
    return arr[i - 1] ? time - arr[i - 1] : time;
  });

  const max = Math.max(...releaseTimes);
  const result = [];
  for (let i = 0; i < releaseTimes.length; i++) {
    if (releaseTimes[i] === max) {
      result.push(keysPressed[i]);
    }
  }
  return result.sort()[result.length - 1];
};

slowestKey([12, 23, 36, 46, 62], "spuda");

