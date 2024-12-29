import sys
from collections import deque

input = sys.stdin.readline
n = int(input())
m1, m2 = map(int, input().split())
k = int(input())
graph = [[] for _ in range(n + 1)]
for _ in range(k):
    x, y = map(int, input().split())
    graph[x].append(y)
ans = -1
q = deque([(m1, 0)])
visited = [False] * (n + 1)
while q:
    p1, distance = q.popleft()
    if p1 == m2:
        ans = distance
        break
    if visited[p1]:
        continue
    visited[p1] = True
    parent = 0
    siblings = []
    for i in range(n):
        if p1 in graph[i]:
            parent = i
            siblings = graph[i]
    for sibling in siblings:
        q.append((sibling, distance + 2))
    for children in graph[p1]:
        q.append((children, distance + 1))
    q.append((parent, distance + 1))
print(ans)
