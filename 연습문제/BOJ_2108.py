from collections import Counter
import math, sys

input = sys.stdin.readline
n = int(input())
arr = [int(input().strip()) for _ in range(n)]
arr.sort()

common = Counter(arr).most_common()
print(math.floor((sum(arr) / n) + 0.5))
print(arr[math.floor(n / 2)])
print(common[0][0] if len(common) < 2 or common[0][1] != common[1][1] else common[1][0])
print(abs(max(arr) - min(arr)))
