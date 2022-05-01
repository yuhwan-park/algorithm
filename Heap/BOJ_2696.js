// https://www.acmicpc.net/problem/2696

// 최대 힙과 최소 힙을 클래스로 구현한다. 더 좋은 방법이 있겠지만 Heap객체를 생성할 때 boolean으로 최소,최대를 구분했다.
// 최대 힙과 최소 힙을 이용해서 중앙값을 구한다. 수열의 원소를 최대힙부터 번갈아서 넣으며
// 값을 넣을 때마다 최대힙의 Top과 최소힙의 Top을 비교해서 최대힙의 Top이 더 크면 그 두 원소를 swap한다.
// 그러면 최대힙에는 중앙값을 포함한 중앙값 이하의 수만이 담기게 되어 자동으로 맨 위에 중앙값이 위치하게 된다.
// 짝수번째 인덱스마다 최대힙의 Top을 배열에 넣고 count변수로 10을 넘어갈 때마다 개행문자를 넣어준다.

class Heap {
  constructor(isMax) {
    this.heap = [];
    this.isMax = isMax;
  }
  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }
  bubble() {
    let target = this.heap.length - 1;
    while (true) {
      let parent = Math.floor((target - 1) / 2);
      if (
        this.isMax
          ? this.heap[parent] < this.heap[target]
          : this.heap[parent] > this.heap[target]
      ) {
        this.swap(target, parent);
        target = parent;
      } else {
        break;
      }
    }
  }
  sinkDown() {
    let target = 0;
    while (true) {
      let leftChildIdx = target * 2 + 1;
      let rightChildIdx = target * 2 + 2;
      let leftNode = this.heap[leftChildIdx];
      let rightNode = this.heap[rightChildIdx];
      let maxNodeIdx;
      if (
        this.isMax
          ? this.heap[target] < leftNode || this.heap[target] < rightNode
          : this.heap[target] > leftNode || this.heap[target] > rightNode
      ) {
        let flag = this.isMax ? leftNode > rightNode : leftNode < rightNode;
        if (!rightNode) maxNodeIdx = leftChildIdx;
        else maxNodeIdx = flag ? leftChildIdx : rightChildIdx;
        this.swap(target, maxNodeIdx);
        target = maxNodeIdx;
      } else {
        break;
      }
    }
  }
  insert(val) {
    this.heap.push(val);
    this.bubble();
  }
  extractMax() {
    if (this.heap.length === 0) return undefined;
    if (this.heap.length === 1) return this.heap.pop();
    let max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown();
    return max;
  }
  peek() {
    return this.heap[0];
  }
}

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./예제.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const len = input.shift();
const cases = [];
while (input.length) {
  let caseLen = input.shift();
  let temp = "";
  for (let i = 0; i <= Math.floor(caseLen / 10); i++) {
    temp += `${input.shift()} `;
  }
  temp = temp
    .trim()
    .split(" ")
    .map((x) => +x);
  cases.push([caseLen, temp]);
}
// 이상 입력받기 [수열의크기, 수열] 형식
const result = [];
for (let i = 0; i < cases.length; i++) {
  const minHeap = new Heap(false);
  const maxHeap = new Heap(true);
  const [n, c] = cases[i];
  let count = 0;
  let resultStr = "";
  result.push((+n + 1) / 2); // 중앙값 개수 출력
  for (let j = 0; j < c.length; j++) {
    if (maxHeap.heap.length === minHeap.heap.length) {
      maxHeap.insert(c[j]);
    } else {
      minHeap.insert(c[j]);
    }

    if (minHeap.heap.length) {
      if (minHeap.peek() < maxHeap.peek()) {
        const maxVal = maxHeap.extractMax();
        const minVal = minHeap.extractMax();
        maxHeap.insert(minVal);
        minHeap.insert(maxVal);
      }
    }

    if (j % 2 === 0) {
      count++;
      resultStr += `${maxHeap.peek()}${count % 10 === 0 ? "\n" : " "}`;
    }
  }
  result.push(resultStr.trim());
}
console.log(result.join("\n"));
