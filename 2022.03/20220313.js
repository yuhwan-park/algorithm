//정규표현식 배움, 문제 풀 때 주석 잘 적기
//Map 사용 ( Map.set 과 Map.get의 사용법 )
//slice,filter는 원본을 바꾸지않는 메소드
//toString()과 parseInt()의 진법 변환 기능

// 신고 결과 받기 - 프로그래머스

function solution(id_list, report, k) {
  const blocked = [];
  const map = new Map();
  const newList = id_list.slice(); // 얕은 복사
  id_list.forEach((x) => {
    map.set(x, 0);
  }); // id 마다 Map 적용
  const reported = [...new Set(report)]; // 중복 제거
  reported.forEach((x) => {
    const input = x.split(' ');
    map.set(input[1], map.get(input[1]) + 1);
  }); // 신고 횟수 저장
  for (let i = 0; i < id_list.length; i++) {
    const element = id_list[i];
    if (map.get(element) >= k) {
      blocked.push(element);
    } // 정지된 ID 배열에 저장
    newList[i] = 0; //  얕은 복사한 배열 수정
  }
  reported.forEach((x) => {
    const input = x.split(' ');
    if (blocked.includes(input[1])) {
      // 신고한 유저가 정지됐다면
      const index = id_list.indexOf(input[0]);
      newList[index] += 1;
    }
  });
  return newList;
}

// 맵을 2개 만들어서 하면 아마 반복문의 수를 줄일 수 있었을 것
// 처음부터 끝까지 검증 한 번 안해보고 적었는데 풀렸던 신기한 문제
// 순서도가 머리에 그려지고 있다는 반증인 것이다 ~

// ------------------------------------------------------------------------

// 로또 최고 순위와 최저 순위 - 프로그래머스

function solution(lottos, win_nums) {
  let count = 0;
  let zeroCount = 0;
  lottos.forEach((x) => {
    if (x === 0) {
      zeroCount += 1;
    } else if (win_nums.includes(x)) {
      count += 1;
    }
  });
  const min = 7 - count >= 6 ? 6 : 7 - count;
  const max = min - zeroCount < 1 ? 1 : min - zeroCount;
  const answer = [max, min];
  return answer;
}

// 당첨 번호 갯수와 0의 갯수 찾는거까진 금방 했는데 규칙 찾는게 뭔가 엄청 힘들어서 헤맸다

// ------------------------------------------------------------------------

// 신규 아이디 추천 - 프로그래머스

function solution(new_id) {
  const step1 = new_id.toLowerCase();
  const step2 = step1.replace(/[^\w\d\.\-\_]/gm, '');
  const step3 = step2.replace(/\.{2,}/gm, '.');
  const step4 = step3.replace(/^\.{1,}|\.{1,}$/gm, '');
  const step5 = step4 === '' ? 'a' : step4;
  const step6 = step5.length > 15 ? step5.slice(0, 15) : step5;
  let step7 = step6.replace(/\.{1,}$/gm, '');
  if (step7.length <= 2) {
    while (step7.length !== 3) {
      step7 += step7[step7.length - 1];
    }
  }
  return step7;
}

// 정규표현식 문제
// 이 문제 풀기 전까진 정규표현식의 존재만 알고 있었을 뿐이었는데 덕분에 어느정도 정규표현식에 익숙해질 수 있었다.

// ------------------------------------------------------------------------

// 소수 만들기 - 프로그래머스

function solution(nums) {
  let count = 0;
  for (let i = 0; i <= nums.length - 3; i++) {
    for (let j = i + 1; j <= nums.length - 2; j++) {
      for (let k = j + 1; k <= nums.length - 1; k++) {
        if (isPrime(nums[i] + nums[j] + nums[k])) {
          count += 1;
        }
      }
    }
  }
  return count;
}

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

// 3중 반복문으로 숫자 3개 고르는 거까진 생각해냈는데 중복제거를 못했었다
// 2번째 반복문부터 let j = 1, k = 2 이렇게만 해놔서 골머리를 앓았음.
// 구글에서 힌트를 보고 풀었음.
// Math.sqrt 메소드 처음 써 봄.

// ------------------------------------------------------------------------

// K번째 수 - 프로그래머스

function solution(array, commands) {
  const answer = [];
  for (let i = 0; i < commands.length; i++) {
    const element = commands[i];
    const arr = array.slice(element[0] - 1, element[1]);
    arr.sort((a, b) => a - b);
    answer.push(arr[element[2] - 1]);
  }
  return answer;
}
//
// 쉽게 풀었다.
// slice,filter는 원본을 바꾸지않는 메소드

// ------------------------------------------------------------------------

// 폰켓몬 - 프로그래머스

function solution(nums) {
  const mySet = new Set(nums);
  if (mySet.size >= nums.length / 2) {
    return nums.length / 2;
  }
  return mySet.size;
}

// https://programmers.co.kr/learn/courses/30/lessons/1845
// 중복제거는 Set가 정말 편하고 좋은 것 같다.

// ------------------------------------------------------------------------

// 3진법 뒤집기 - 프로그래머스

function solution(n) {
  const Ternary = [];
  while (true) {
    Ternary.push(n % 3);
    n = parseInt(n / 3);
    if (n < 3) {
      Ternary.push(n);
      break;
    }
  }
  let answer = 0;
  for (let i = 0; i < Ternary.length; i++) {
    const element = Ternary[i];
    answer += element * 3 ** (Ternary.length - (i + 1));
  }
  return answer;
}
// 제일 처음 적었던 풀이인데 1번째 케이스에서 왜 실패가 떴는지 모르겠다
// while,break 이용과 ** 제곱 연산자를 처음 이용해봤다

const solution = (n) => {
  return parseInt([...n.toString(3)].reverse().join(''), 3);
};

// 위 풀이법은 인터넷에서 본 풀이법인데 toString으로 진법 변환하는걸 처음 알았다
// parseInt의 2번째 인자도 진법 변환인걸 다시금 새뇌길수 있었다.

// ------------------------------------------------------------------------
