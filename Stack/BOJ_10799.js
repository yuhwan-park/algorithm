// https://www.acmicpc.net/problem/10799

// ----------------------------- 풀이 -------------------------------
// () 는 막대로 보지않고 레이저로 보기때문에 붙어있는 괄호는 레이저로(o) 치환해준다.
// 여는 괄호가 나오면 막대가 하나 생성돼기 때문에 스택에 1을 더해주고
// 닫는 괄호가 나오면 막대가 하나 없어지기 때문에 스택에서 1을 빼준다.
// 레이저가 나오면 그동안 나온 막대가 얼마나 길던 잘려 나온 막대기가 스택의 수만큼 생기기 때문에
// 정답으로 카운팅을 해준다.
// 닫는 괄호는 여는 괄호와 레이저가 나온 뒤에 나올 수밖에 없기 때문에 막대가 끝나 잘려나온 막대기를 하나 정답에 추가해준다

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./예제.txt";
const input = fs.readFileSync(filePath).toString();

const razor = input.replace(/\(\)/gm, "o");
let stack = 0;
let answer = 0;
for (let i = 0; i < razor.length; i++) {
  if (razor[i] === "(") {
    stack++;
  } else if (razor[i] === "o") {
    answer += stack;
  } else if (razor[i] === ")") {
    answer += 1;
    stack--;
  }
}
console.log(answer);
