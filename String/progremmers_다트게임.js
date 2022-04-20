// https://programmers.co.kr/learn/courses/30/lessons/17682

// 풀이
// 문자열처리와 토큰화 문제이다. 원래라면 정규식으로 각각의 조각을 잘라냈어야 했지만 지식부족으로 인해
// 각 반복이 끝날때마다 문자를 잘라냈다. 문자를 자르는 기준은 숫자가 10인지(isTen) 옵션이 있는지(opt)에 따라 다르다.
// 토큰화 정규식 => /\d.?\D.?/g 으로 자르고
// match 메소드를 사용하여 정규식의 괄호 그룹핑으로 숫자,보너스,옵션을 자른다.

function solution(res) {
  const score = [];
  while (res.length) {
    let [num, bon, opt, isTen] = [0, "", "", false];
    if (res[1] === "0") {
      isTen = true;
      num = 10;
      bon = res[2];
      opt = res[3] === "*" || res[3] === "#" ? res[3] : "";
    } else {
      num = +res[0];
      bon = res[1];
      opt = res[2] === "*" || res[2] === "#" ? res[2] : "";
    }
    num =
      bon === "S"
        ? Math.pow(num, 1)
        : bon === "D"
        ? Math.pow(num, 2)
        : Math.pow(num, 3);
    if (opt === "*") {
      num *= 2;
      if (score[score.length - 1]) score[score.length - 1] *= 2;
    } else if (opt === "#") {
      num *= -1;
    }
    score.push(num);
    res = res.slice(isTen && opt ? 4 : opt || isTen ? 3 : 2);
  }
  return score.reduce((acc, cur) => acc + cur, 0);
}
