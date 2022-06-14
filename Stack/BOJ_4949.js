// https://www.acmicpc.net/problem/4949

// 풀이
// 문자열이 주어졌을 때 괄호만 남기고 제거한다. (무의미한 반복 제거)
// 여는 괄호는 그대로 스택에 넣고 닫는 괄호가 나왔을 때 스택의 맨 마지막이
// 짝이 아니라면 그 순간 균형이 이루어져있지 않다고 판단하여 반복을 멈추고 다음 반복을 진행한다.
// 그리고 스택의 길이가 0이 아닌 경우 (여는 괄호가 남아있을 경우) 도 처리하기 위해
// !stack.length 로 처리를 해준다.

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./예제.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const answer = [];

for (let i = 0; i < input.length - 1; i++) {
  const element = input[i].trim().replace(/[\w\s]/g, "");
  const stack = [];
  let flag = true;

  for (let j = 0; j < element.length; j++) {
    const str = element[j];
    if (str === "(" || str === "[") {
      stack.push(str);
    } else if (str === ")") {
      if (stack.pop() !== "(") {
        flag = false;
        break;
      }
    } else if (str === "]") {
      if (stack.pop() !== "[") {
        flag = false;
        break;
      }
    }
  }

  answer.push(flag && !stack.length ? "yes" : "no");
}
console.log(answer.join("\n"));
