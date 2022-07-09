// https://leetcode.com/problems/baseball-game/

/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  const stack = [];

  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === "C") {
      stack.pop();
    } else if (ops[i] === "D") {
      stack.push(stack[stack.length - 1] * 2);
    } else if (ops[i] === "+") {
      stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
    } else {
      stack.push(+ops[i]);
    }
    console.log(stack);
  }

  return stack.reduce((acc, cur) => acc + cur, 0);
};

calPoints(["5", "2", "C", "D", "+"]);

