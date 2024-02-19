import sys

input = sys.stdin.readline

N = int(input())
ropes = [int(input()) for _ in range(N)]
ropes.sort(reverse=True)

prev = 0
for i in range(len(ropes)):
    if ropes[i] * (i + 1) < prev:
        continue
    prev = ropes[i] * (i + 1)

print(prev)
