// https://www.acmicpc.net/problem/2667

// 풀이 | BFS

// 의사 코드
// 1. '1'인 좌표를 탐색한다.
// 2. 탐색한 좌표는 visited로 체크한다.
// 3. 상하좌우에 1이고 방문한적이 없는 좌표라면 그 좌표를 기준으로 다시 탐색한다
// 4. 탐색할 때마다 count 변수에 1씩 더한다.
// 5. 탐색이 종료될 때(더이상 인접한 아파트가 없을 때) 정답배열에 count 변수를 push한다.
// 6. count가 연결된 아파트의 수이고 count의 개수가 단지의 수이다.
const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./예제.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input.map((x) => x.trim());
const len = +input.shift();
const result = [];

const visited = {};
function BFS(x, y) {
  const queue = [[x, y]];
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  let count = 1;
  visited[[x, y]] = true;
  while (queue.length) {
    const coord = queue.shift();
    for (let i = 0; i < 4; i++) {
      let newX = coord[0] + dx[i];
      let newY = coord[1] + dy[i];
      if (newX < 0 || newX >= len || newY < 0 || newY >= len) continue;
      if (input[newX][newY] === "1" && !visited[[newX, newY]]) {
        visited[[newX, newY]] = true;
        queue.push([newX, newY]);
        count += 1;
      }
    }
  }
  return count;
}

for (let i = 0; i < len; i++) {
  for (let j = 0; j < len; j++) {
    if (input[i][j] === "1" && !visited[[i, j]]) result.push(BFS(i, j));
  }
}
result.sort((a, b) => a - b);
console.log(result.length);
console.log(result.join("\n"));
