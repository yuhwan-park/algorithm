// https://leetcode.com/problems/destination-city/

// 풀이
// 중복되는 출발지가 없으니 key를 출발지 value를 목적지로 map에 세팅하고
// 목적지를 따로 배열로 모아 순회하면서 map에 해당 목적지가 key로 존재하지 않으면
// 그 목적지는 최종 목적지가 된다.

/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  const m = new Map();
  const destinations = [];
  let answer;
  for (let i = 0; i < paths.length; i++) {
    const [c1, c2] = paths[i];
    m.set(c1, c2);
    destinations.push(c2);
  }

  destinations.forEach((des) => {
    if (!m.has(des)) {
      answer = des;
    }
  });
  return answer;
};

// Runtime: 126 ms, faster than 13.20%
// Memory Usage: 44.1 MB, less than 68.65%

// 다른 사람의 풀이
// Map의 생성 함수에 2차원 배열을 넣으면 0번째 인덱스는 Key, 1번째 인덱스는 value로
// 자동으로 생성해준다!!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#relation_with_array_objects

const destCity = function (paths) {
  const hash = new Map(paths);

  for (const to of hash.values()) {
    if (!hash.has(to)) return to;
  }
};

