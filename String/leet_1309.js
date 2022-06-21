// https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/

// 풀이
// 주어진 문자열을 순회하며 i + 2 인덱스에 #이 있다면 j 이상의 알파벳이라고 봤다.
// 그 후에 아스키코드 변환을 하여 알파벳으로 바꾼 후 정답 문자열에 더해주었다

/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (!s[i + 2] || s[i + 2] !== "#") {
      answer += String.fromCharCode(+s[i] + 96);
    } else {
      const num = s.slice(i, i + 2);
      answer += String.fromCharCode(+num + 96);
      i += 2;
    }
  }
  return answer;
};

// Runtime: 68 ms, faster than 82.61%
// Memory Usage: 41.8 MB, less than 89.13%

// 다른 사람의 풀이
// match 메소드와 정규식을 이용하여 #이 붙어있는 숫자와 안붙어있는 숫자를 바로 배열로 나눈다.
// (?=#) 와 같은 정규식표현의 긍정형 전방 탐색을 이용하여 #이 붙는걸 검색하지만 검색결과에는
// #을 돌려주지 않아 따로 제거하는 코드를 작성하지 않아도 된다!

var freqAlphabets = function (s) {
  return s
    .match(/\d{2}(?=#)|\d/g)
    .map((num) => String.fromCharCode(96 + +num))
    .join("");
};
