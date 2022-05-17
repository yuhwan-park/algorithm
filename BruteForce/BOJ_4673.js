// https://www.acmicpc.net/problem/4673

// 풀이
// 10000의 길이를 가진 배열을 선언하고 셀프넘버가 아닌 숫자의 인덱스는 true로 설정
// 계산을 다 한 후 false인 인덱스만 출력한다.

const arr = new Array(10000).fill(false);

function d(num) {
  let sum = num
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
  arr[sum + num] = true;
}

for (let i = 1; i < 10000; i++) {
  d(i);
}
arr[0] = true;
const result = [];
arr.forEach((v, i) => {
  if (!v) {
    result.push(i);
  }
});

console.log(result.join("\n"));
