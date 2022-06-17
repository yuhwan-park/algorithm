// https://leetcode.com/problems/rings-and-rods/

// 해시 테이블
// 풀이
// 0~9 까지 있는 key는 배열의 index로 두고 value는 배열을 만들어 RGB를 넣었다
// 그 후 table 배열을 조회하며 RGB가 다 들어있으면 카운트를 올린다

/**
 * @param {string} rings
 * @return {number}
 */

var countPoints = function (rings) {
  const table = new Array(10).fill([]);
  let count = 0;

  for (let i = 0; i < rings.length; i += 2) {
    [color, rod] = [rings[i], +rings[i + 1]];
    table[rod] = [...table[rod], color];
  }
  table.forEach((rod) => {
    if (rod.includes("R") && rod.includes("G") && rod.includes("B")) {
      count++;
    }
  });

  return count;
};

countPoints("B0B6G0R6R0R6G9");

// 다른 사람의 풀이

// Map과 Set을 사용한 풀이이다.
// 내 풀이에서는 일단 배열안에 RGB를 전부 집어넣어 메모리 측면에서 많이 안좋았는데
// 요소의 중복이 안되는 Set를 사용하여 불필요한 메모리사용을 해결하였고
// 또 나는 includes 메소드를 사용해 배열 순회를 하였지만
// 중복이 제거된 Set로 인해 길이가 3이면 RGB가 다 들어있는걸 판단할 수 있어 시간복잡도 측면도 많이 좋아졌다.

var countPoints = function (rings) {
  let n = rings.length;

  let map = new Map(); // map of  rod nums  to their  set of colors
  for (let i = 0; i < n; i += 2) {
    let color = rings[i];
    let rod = +rings[i + 1];

    if (!map.has(rod)) map.set(rod, new Set());
    map.get(rod).add(color);
  }

  let count = 0;
  for (let [rod, setColors] of map) {
    if (setColors.size == 3) count++;
  }
  return count;
};
