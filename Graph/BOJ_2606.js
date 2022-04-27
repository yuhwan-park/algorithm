// https://www.acmicpc.net/problem/2606

// 풀이
// 감염 여부를 확인하고 추가하는 로직은 간단하지만 얼마나 반복해야하는지가 문제이다.
// 6 5 가령 왼쪽의 케이스라면 내가 작성한 코드로는 최소 5번의 반복이 필요하다.
// 5 4 그래서 DFS,BFS를 적용해볼까 했지만 while문의 조건이 까다로웠다.
// 3 2 일단 문제를 풀기위해 효율이 조금 떨어지더라도 최소 네트워크 수만큼의
// 1 2 반복을 추가해 O(n^2)은 아니지만 O(n * m)정도의 시간복잡도를 가졌다.
// 4 3

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./예제.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const computers = +input.shift();
const networks = +input.shift();
const virus = new Set(); // 바이러스 세트
virus.add(1); // 1은 원래 숙주

for (let i = 0; i < networks; i++) {
  // 최악의 상황 고려해서 네트워크의 수만큼 반복
  for (let j = 0; j < input.length; j++) {
    const [com1, com2] = input[j].split(" ").map((x) => +x);
    if (virus.has(com1) || virus.has(com2)) {
      // 연결된 컴퓨터가 바이러스에 감염된 컴퓨터라면
      virus.add(com2);
      virus.add(com1);
    }
  }
}

console.log(virus.size - 1);
