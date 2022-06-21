# 정렬

## [정렬 시각화 사이트](https://visualgo.net/en/sorting)

목차

1. [버블 정렬(Bubble Sort)](#버블-정렬)
2. [선택 정렬(Selection Sort)](#선택-정렬)
3. [삽입 정렬(Insertion Sort)](#삽입-정렬)
4. [버블,선택,삽입 정렬 비교](#버블-선택-삽입-정렬-비교)
5. [합병 정렬(Merge Sort)](#합병-정렬)
6. [퀵 정렬](#퀵-정렬)
7. [기수 정렬](#기수-정렬)

## 버블 정렬

```js
function bubbleSort(arr) {
  var noSwaps;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
```

0부터 시작해서 붙어있는 인덱스 두개를 비교하여 큰 수를 뒤로 보내는 정렬<br>
루프가 한번 끝날때마다 제일 큰 숫자는 맨 뒤에 쌓이기 때문에 루프를 거듭할 수록 반복횟수가 줄어듦

<hr>

## 선택 정렬

```js
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}
```

루프마다 배열의 제일 작은 값을 선택해서 i번째 인덱스 요소랑 바꾸는 정렬

<hr>

## 삽입 정렬

```js
function insertionSort(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}
```

배열의 1번째 인덱스부터 시작해서 한 루프당 하나의 요소를 올바른 위치에 삽입하는 정렬

<hr>

## 버블, 선택, 삽입 정렬 비교

<img src='./assets/sort.PNG'>

위 세개의 정렬법은 기본 정렬 알고리즘으로 보통 2차 정렬 알고리즘이라 불린다. 시간복잡도가 O(n^2)이기 때문이다.
적은 데이터 집합을 정렬할 때는 언제 써도 괜찮을 알고리즘이지만 만약 배열의 요소가 10만개, 100만개를 넘어간다면 걸리는 시간이 만만치 않을 것이다.
거의 정렬된 배열(nearly sorted)을 정렬할 때 버블,삽입의 경우에는 값을 비교할 때 바꿀 필요가 없다면 바로 루프가 넘어가지만 선택 정렬은 원하는 값을 찾을 때까지
배열을 계속 순회하는 점에서 Best Case여도 시간복잡도가 O(n^2)인 것을 볼 수 있다.

<hr>

## 합병 정렬

```js
// 합병 Merge
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}
// 분할 Divide
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, sright);
}
```

분할 정복으로 배열을 반으로 나누고 재귀적으로 원소가 하나가 될 때까지 나눈다.<br>
그 후에 분할된 배열의 원소를 하나하나 정렬하며 반환한다.

- 합병 정렬의 Big O
  <img src='./assets/mergeBigO.PNG'>
  분할 하는데 log2(n)의 시간이 걸리고 합병하는데 모든 원소를 한번씩 참조하면서 비교해야 하니 n의 시간이 걸린다. 합치면 O(n log n)의 시간이 걸린다. 공간 복잡도는 입력된 배열의 길이만큼 배열을 만들어내서 O(n)이다.

<hr>

## 퀵 정렬

```js
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // 이 예제에서는 pivot을 항상 첫 원소로 정함
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // pivot을 swapIndex와 바꿈
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]);
```

합병 정렬과 비슷하게 Pivot이라는 헬퍼 함수가 있다. 하나의 수를 pivot으로 정한다. 배열을 순회하면서 pivot보다 작은 수는 pivot의 왼쪽, 큰 수는 pivot의 오른쪽으로 위치시킨다고 이해하면 편하다. (조건에 만족할 때마다 swap을 하는건 아니다. 코드를 보자.)<br>

위 헬퍼 함수로 pivot을 정확한 index에 위치 시켰다면 재귀적으로 왼쪽과 오른쪽에 똑같이 적용한다. base case는 subarray의 원소가 한개 이하일 때, 즉 왼쪽,오른쪽 인덱스가 같거나 왼쪽이 더 클 때이다.

- 퀵 정렬의 Big O
<img src='./assets/quickBigO.png'>
Worst Case가 O(n^2)인 이유는 거의 정렬된 배열을 정렬할 때 pivot으로 정한 수가 배열의 최소값이나 최대값일 경우가 계속 반복될 경우가 있기 때문이다.
<hr>

## 기수 정렬
