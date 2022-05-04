// https://www.acmicpc.net/problem/1935

// 풀이
// 2번째 줄의 연산자로 반복문을 돌리고 ascii 코드로 바꿔서 65를 빼준다.
// 그러면 A = 0, B = 1 ... 로 숫자가 바뀌어 인덱스로 활용할 수 있고 연산자는 음수가 된다.
// 양수라면 input 배열에서 인덱스에 따라 숫자를 스택에 넣고
// 음수라면 연산자에 따라서 스택에서 숫자 두개를 빼 계산한 후 스택에 다시 넣는다.

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./예제.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const len = input.shift();
const cal = input.shift().trim().split("");
input = input.map((x) => +x);
const stack = [];
for (let i = 0; i < cal.length; i++) {
  const flag = cal[i].charCodeAt(0) - 65;
  if (flag < 0) {
    const [n1, n2] = [stack.pop(), stack.pop()];
    let result;
    if (flag === -23) result = n2 * n1;
    else if (flag === -18) result = n2 / n1;
    else if (flag === -22) result = n2 + n1;
    else result = n2 - n1;
    stack.push(result);
  } else {
    stack.push(input[flag]);
  }
}
console.log(stack[0].toFixed(2));
