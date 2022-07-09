// https://leetcode.com/problems/crawler-log-folder/

/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  const stack = [];

  for (let i = 0; i < logs.length; i++) {
    if (logs[i] === "../") {
      stack.pop();
    } else if (logs[i] !== "./") {
      stack.push(logs[i]);
    }
  }

  return stack.length;
};

minOperations(["d1/", "../", "../", "../"]);

