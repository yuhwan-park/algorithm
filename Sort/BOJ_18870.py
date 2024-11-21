import sys

input = sys.stdin.readline
n = int(input())
arr = list(map(lambda x: (x[0], int(x[1])), enumerate(input().strip().split())))
arr.sort(key=lambda x: x[1])
answer = [0] * n
prev, prev_count = 0, -1
for i, x in arr:
    if prev != x:
        prev_count += 1
    prev = x
    answer[i] = prev_count
print(*answer)
