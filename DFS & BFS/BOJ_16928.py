import sys
from collections import deque

input = sys.stdin.readline
n, m = map(int, input().strip().split())
graph = {}
for _ in range(n + m):
    start, end = map(int, input().strip().split())
    graph[start] = end
visited = [False] * 101
q = deque([(1, 0)])
answer = 999999
while q:
    x, dice = q.popleft()
    if x >= 100:
        answer = min(answer, dice)
        continue
    if visited[x]:
        continue
    visited[x] = True
    if x in graph:
        q.appendleft((graph[x], dice))
        continue
    for i in range(1, 7):
        q.append((x + i, dice + 1))
print(answer)
