import sys
from collections import deque

input = sys.stdin.readline
n, m = map(int, input().split())
graph = [[] for _ in range(n + 1)]
for _ in range(m):
    i, j = map(int, input().split())
    graph[i].append(j)
    graph[j].append(i)
answer = []
for i in range(1, n + 1):
    sum_ = 0
    for j in range(1, n + 1):
        if i == j:
            continue
        kevin = 1
        visited = [False] * (n + 1)
        q = deque([graph[i]])
        while q:
            arr = q.popleft()
            if j in arr:
                break
            list_ = []
            kevin += 1
            for x in arr:
                if not visited[x]:
                    list_ += graph[x]
                    visited[x] = True
            q.append(list_)
        sum_ += kevin
    answer.append((i, sum_))

print(sorted(answer, key=lambda x: (x[1], x[0]))[0][0])
