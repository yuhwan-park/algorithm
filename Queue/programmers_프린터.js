// https://programmers.co.kr/learn/courses/30/lessons/42587

// 풀이
// 목표 인덱스가 0번째로 왔을 때 중요도가 제일 높다면 지금까지 인쇄된 길이 + 1을 리턴

function solution(priorities, location) {
  const printed = [];
  while (true) {
    let max = Math.max(...priorities);
    // 목표 인덱스가 0일 때 제일 큰 숫자인지
    if (location === 0 && priorities[0] < max) {
      location = priorities.length;
    } else if (location === 0 && priorities[0] >= max) {
      return printed.length + 1;
    }
    if (priorities[0] < max) {
      priorities.push(priorities.shift());
    } else {
      printed.push(priorities.shift());
    }
    location--;
  }
}
solution([1, 1, 9, 1, 1, 1], 0);
