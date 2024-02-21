import sys
import heapq

input = sys.stdin.readline

n = int(input())
arr = [int(input()) for _ in range(n)]
arr.sort()

result = arr[0]

if len(arr) == 1:
    print(0)
else:
    result = 0
    while len(arr) > 0:
        n = heapq.heappop(arr)
        m = heapq.heappop(arr)
        result += n + m
        if len(arr) >= 1:
            heapq.heappush(arr, n + m)
    print(result)
