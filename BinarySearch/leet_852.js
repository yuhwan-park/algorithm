// https://leetcode.com/problems/peak-index-in-a-mountain-array/

// 풀이
// 문제는 정말 간단히 풀리지만 O(n)이 아닌 O(log n) 즉 이진탐색으로 풀 수 있다.

// O(n) ...
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) return i;
  }
};

// O(log n) ...
// 배열이 정렬되어있기에 이진탐색을 사용할 수 있는 문제이다.
const peakIndexInMountainArray = (A, low = 0, high = A.length - 1) => {
  if (!A.length) return -1;

  const mid = ((low + high) / 2) | 0;

  if (A[mid] > A[mid - 1] && A[mid] > A[mid + 1]) return mid;

  if (A[mid] < A[mid - 1]) return peakIndexInMountainArray(A, low, mid);

  if (A[mid] < A[mid + 1]) return peakIndexInMountainArray(A, mid, high);
};

