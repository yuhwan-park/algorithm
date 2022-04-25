// https://programmers.co.kr/learn/courses/30/lessons/42583

//

function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  const trucks = truck_weights.length; // 원래의 트럭 수 저장
  const bridge = Array(bridge_length).fill(false); // 다리 배열 생성(큐)
  const passed = []; // 지나 온 트럭 배열
  while (passed.length !== trucks) {
    answer++;
    // 다리의 트럭들이 한칸씩 전진하는 반복문
    for (let i = 0; i < bridge.length; i++) {
      if (bridge[i]) {
        if (bridge[i - 1] === undefined) {
          passed.push(bridge[i]);
          weight += bridge[i];
          bridge[i] = false;
        } else {
          bridge[i - 1] = bridge[i];
          bridge[i] = false;
        }
      }
    }
    // 다리가 견딜 수 있는 무게보다 이번에 들어갈 트럭무게가 작다면 다리로 트럭 진입
    if (truck_weights[0] <= weight) {
      const truck = truck_weights.shift();
      bridge[bridge.length - 1] = truck;
      weight -= truck;
    }
  }
  return answer;
}
// 1. 트럭 입장
// 2. 무게를 넘으면 다음트럭 입장, 넘지않으면 무게가 빠질때까지 대기
// 3. 다리를 다 건너면 대기 트럭 유무 확인 있으면 무게 비교 후 들어가기
// 4. 다리를 지난 트럭 배열과 대기 트럭 배열의 길이가 똑같다면 break
// 5. 정답 리턴
