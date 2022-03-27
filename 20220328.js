// 백준 10845번 문제 큐
// https://www.acmicpc.net/problem/10845
const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const len = input.shift();
const queue = [];
const result = [];
for (let i = 0; i < len; i++) {
  const command = input[i].trim().split(' ');
  switch (command[0]) {
    case 'push':
      queue.push(command[1]);
      break;
    case 'pop':
      result.push(queue.length !== 0 ? queue.shift() : '-1');
      break;
    case 'size':
      result.push(queue.length);
      break;
    case 'empty':
      result.push(queue.length !== 0 ? '0' : '1');
      break;
    case 'front':
      result.push(queue.length !== 0 ? queue[0] : '-1');
      break;
    case 'back':
      result.push(queue.length !== 0 ? queue[queue.length - 1] : '-1');
  }
}
console.log(result.join('\n'));
// Array 메소드, 삼항연산자, Switch문

// ------------------------------------------------------------------------------------

// 백준 1406번 문제 에디터
// https://www.acmicpc.net/problem/1406
const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './예제.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const Lstack = input.shift().trim().split('');
const len = input.shift();
const Rstack = [];
for (let i = 0; i < len; i++) {
  switch (input[i][0]) {
    case 'L':
      if (Lstack.length !== 0) {
        Rstack.push(Lstack.pop());
      }
      break;
    case 'D':
      if (Rstack.length !== 0) {
        Lstack.push(Rstack.pop());
      }
      break;
    case 'B':
      if (Lstack.length !== 0) {
        Lstack.pop();
      }
      break;
    case 'P':
      Lstack.push(input[i][2]);
      break;
  }
}
console.log(Lstack.concat(Rstack.reverse()).join(''));

// 처음에는 커서의 방향을 Array의 인덱스로 구현하려 했지만 장시간의 시행착오 끝에 어렵다는걸 깨닫고 인터넷 서칭을 한 결과
// 스택을 두개로 나눠서 풀면 굉장히 쉽게 풀린다는걸 알았다...
// 출력 과정에서 reverse 메소드를 쓰지 않으려고 L과 D 커맨드에서 unshift와 shift 메소드를 썼는데 시간초과가 나왔다.
// unshift와 shift는 메모리를 더 쓰는걸까? 그래서 다시 전부 push와 pop으로 바꾸고 reverse 메소드로 출력을 하였다.
