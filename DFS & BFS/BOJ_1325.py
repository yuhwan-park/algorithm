# BOJ_1325.py
import sys
from collections import deque

input = sys.stdin.readline
n, m = map(int, input().split())
graph = [[] for _ in range(n + 1)]
for _ in range(m):
    x, y = map(int, input().strip().split())
    graph[y].append(x)
max_count = 0
result = []
for i in range(1, n + 1):
    visited = [0] * (n + 1)
    q = deque([i])
    visited[i] = True
    count = 0
    while q:
        x = q.popleft()
        for company in graph[x]:
            if not visited[company]:
                visited[company] = 1
                count += 1
                q.append(company)
    result.append(count)
max_result = max(result)
for i in range(n):
    if result[i] == max_result:
        print(i + 1, end=" ")
