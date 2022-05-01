// https://www.acmicpc.net/problem/11286

// 풀이
// 최소 힙인데 버블업이나 싱크다운을 할 때 비교 대상의 절대값이 같은 경우가 있다.
// 버블업 같은 경우에는 부모와 자식의 절대값이 같을 때 음수가 위를 향하게 하면 되고
// 싱크다운은 죄우 자식의 절대값이 같다면 절대값을 뺀 정수로 비교해서 음수가 위로 올라가게 하고
// 절대값이 같지 않다면 절대값이 작은게 위로 올라오면 되므로 절대값으로 비교를 한다.
// 뭔가 설명이 더 어려운듯...

class Heap {
  constructor() {
    this.heap = [];
  }
  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }
  bubble() {
    let target = this.heap.length - 1;
    while (true) {
      let parent = Math.floor((target - 1) / 2);
      if (
        // 절대값은 같은데 부모가 음수라면 안바꿈
        Math.abs(this.heap[parent]) === Math.abs(this.heap[target]) &&
        this.heap[parent] > this.heap[target]
      ) {
        this.swap(target, parent);
        target = parent;
        continue;
      }
      if (Math.abs(this.heap[parent]) > Math.abs(this.heap[target])) {
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
      let leftNode = Math.abs(this.heap[leftChildIdx]);
      let rightNode = Math.abs(this.heap[rightChildIdx]);
      let minNodeIdx;

      if (
        Math.abs(this.heap[target]) >= leftNode ||
        Math.abs(this.heap[target]) >= rightNode
      ) {
        if (!rightNode) {
          minNodeIdx = leftChildIdx;
        } else if (leftNode === rightNode) {
          minNodeIdx =
            this.heap[leftChildIdx] < this.heap[rightChildIdx]
              ? leftChildIdx
              : rightChildIdx;
        } else {
          minNodeIdx = leftNode < rightNode ? leftChildIdx : rightChildIdx;
        }
        this.swap(target, minNodeIdx);
        target = minNodeIdx;
      } else {
        break;
      }
    }
  }
  insert(val) {
    this.heap.push(val);
    this.bubble();
  }
  extractMin() {
    if (this.heap.length === 0) return undefined;
    if (this.heap.length === 1) return this.heap.pop();
    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown();
    return min;
  }
}

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./예제.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

const heap = new Heap();
const result = [];
for (let i = 1; i < input.length; i++) {
  if (input[i] === 0) {
    result.push(heap.heap.length ? heap.extractMin() : 0);
  } else {
    heap.insert(input[i]);
  }
}
console.log(result.join("\n"));
