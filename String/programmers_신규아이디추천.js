// https://programmers.co.kr/learn/courses/30/lessons/72410

// 풀이는 주석으로

function solution(new_id) {
  const step1 = new_id.toLowerCase(); // 소문자로 치환
  const step2 = step1.replace(/[^\w\d\.\-\_]/gm, "");
  // 대괄호 안의 ^는 대괄호 안의 내용과 일치하지 않는 것을 선택
  // \w = [A-Za-z0-9_] \d = [0-9]
  const step3 = step2.replace(/\.{2,}/gm, ".");
  // . 이 2개 이상 있으면 .하나로 치환
  const step4 = step3.replace(/^\.|\.$/gm, "");
  // ^과 $은 시작과 끝을 의미 시작과 끝에 .이 있으면 제거
  const step5 = step4 === "" ? "a" : step4;
  // 빈 문자열이라면 a를 추가 padEnd 메소드도 쓸 수 있음
  let step6 = step5.length > 15 ? step5.slice(0, 15) : step5;
  // 15자를 넘는다면 15자까지 slice
  let step7 = step6.replace(/\.$/gm, "");
  // slice 한 후 문장 끝에 마침표(.)이 있다면 제거
  if (step7.length <= 2) {
    // 문장의 길이가 2자 이하라면
    while (step7.length !== 3) {
      // 3자가 될때까지 마지막 문자를 추가
      // 마찬가지로 padEnd로 축약 가능
      step7 += step7[step7.length - 1];
    }
  }
  return step7;
}

