import sys

input = sys.stdin.readline
n, m = map(int, input().split())
arr = [int(input().strip()) for _ in range(n)]

min_num = 1
max_num = max(arr)

while min_num <= max_num:
    mid = (min_num + max_num) // 2
    total = sum(n // mid for n in arr)
    if total >= m:
        min_num = mid + 1
    else:
        max_num = mid - 1

print(max_num)
