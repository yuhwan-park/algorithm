// https://programmers.co.kr/learn/courses/30/lessons/86491

// 풀이
// 문제에서는 가로,세로를 명시하고 있지만 사실 회전할 수 있다는 말은 어떤 숫자도 가로 세로가 될 수 있다는 말이다.
// 두 숫자중에 작은 숫자를 세로로 두고 큰 숫자를 가로로 둔 뒤 각각의 큰 숫자를 곱해준다.

function solution(sizes) {
  const smallNum = [];
  const bigNum = [];
  sizes.forEach((x) => {
    smallNum.push(x[0] > x[1] ? x[1] : x[0]);
    bigNum.push(x[0] > x[1] ? x[0] : x[1]);
  });
  return Math.max(...smallNum) * Math.max(...bigNum);
}
