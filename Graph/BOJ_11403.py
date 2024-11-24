from collections import deque

n = int(input())
graph = []
for _ in range(n):
    arr = [i for i, x in enumerate(list(map(int, input().split()))) if x == 1]
    graph.append(arr)
for i in range(n):
    q = deque([graph[i]])
    answer_list = [0] * n
    visited = [False] * n
    while q:
        lst = q.popleft()
        for j in lst:
            if not visited[j]:
                visited[j] = True
                answer_list[j] = 1
                q.append(graph[j])
    print(*answer_list)
