// https://www.acmicpc.net/problem/10866

// ----------------------------- 풀이 -------------------------------
// 이 문제는 덱이 무엇인지를 알려주는 문제이다. 양방향으로 in & out 을 할 수 있는 메소드만 숙지하고 있으면 된다.
// 자바스크립트로 예를 들면
// push_front X: Array.unshift()
// push_back X: Array.push()
// pop_front: Array.shift()
// pop_back: Array.pop() 이다.
const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./예제.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const len = +input.shift();
const result = [];
const deque = [];
for (let i = 0; i < len; i++) {
  const splitInput = input[i].trim().split(" ");
  switch (splitInput[0]) {
    case "push_front":
      deque.unshift(splitInput[1]);
      break;
    case "push_back":
      deque.push(splitInput[1]);
      break;
    case "pop_front":
      result.push(deque.length > 0 ? deque.shift() : -1);
      break;
    case "pop_back":
      result.push(deque.length > 0 ? deque.pop() : -1);
      break;
    case "size":
      result.push(deque.length);
      break;
    case "empty":
      result.push(deque.length > 0 ? 0 : 1);
      break;
    case "front":
      result.push(deque.length > 0 ? deque[0] : -1);
      break;
    case "back":
      result.push(deque.length > 0 ? deque[deque.length - 1] : -1);
      break;
  }
}
console.log(result.join("\n"));
