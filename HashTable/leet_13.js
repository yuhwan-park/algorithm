// https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "I":
        if (s[i + 1] === "V") {
          answer += 4;
          i++;
        } else if (s[i + 1] === "X") {
          answer += 9;
          i++;
        } else answer += 1;
        break;
      case "V":
        answer += 5;
        break;
      case "X":
        if (s[i + 1] === "L") {
          answer += 40;
          i++;
        } else if (s[i + 1] === "C") {
          answer += 90;
          i++;
        } else answer += 10;
        break;
      case "L":
        answer += 50;
        break;
      case "C":
        if (s[i + 1] === "D") {
          answer += 400;
          i++;
        } else if (s[i + 1] === "M") {
          answer += 900;
          i++;
        } else answer += 100;
        break;
      case "D":
        answer += 500;
        break;
      case "M":
        answer += 1000;
        break;
    }
  }
  return answer;
};

// 다른 사람의 풀이

// 앞에오는 로마숫자가 뒤의 로마숫자보다 작다면 음수라는 규칙을 활용한 풀이.
// 나는 이 규칙이 안떠올라서 모든 조건의 예외처리를 해버렸다.
// 멍청이 ㅠㅠ

symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  value = 0;
  for (let i = 0; i < s.length; i += 1) {
    symbols[s[i]] < symbols[s[i + 1]]
      ? (value -= symbols[s[i]])
      : (value += symbols[s[i]]);
  }
  return value;
};
