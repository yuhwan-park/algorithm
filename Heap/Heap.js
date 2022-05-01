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
      if (this.heap[parent] < this.heap[target]) {
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
      if (this.heap[target] < leftNode || this.heap[target] < rightNode) {
        if (!rightNode) maxNodeIdx = leftChildIdx;
        else maxNodeIdx = leftNode > rightNode ? leftChildIdx : rightChildIdx;
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
}
