import sys

input = sys.stdin.readline
n = int(input())
arr = []
for _ in range(n):
    x, y = map(int, input().split())
    arr.append((x, y))
arr.sort(key=lambda x: (x[1], x[0]))
cur = -1
answer = 0
for i, j in arr:
    if cur <= i:
        cur = j
        answer += 1
print(answer)
