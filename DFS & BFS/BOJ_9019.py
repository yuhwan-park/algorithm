import sys
from collections import deque

input = sys.stdin.readline
T = int(input())
for _ in range(T):
    start, target = map(int, input().strip().split())
    graph = {}
    visited = {}
    q = deque([(start, "")])
    while q:
        x, funcs = q.popleft()
        if x in visited:
            continue
        str_x = str(x).rjust(4, "0")
        visited[x] = True
        D = x * 2 % 10000 if x * 2 > 9999 else x * 2
        S = 9999 if x == 0 else x - 1
        L = int(str_x[1:] + str_x[0])
        R = int(str_x[-1] + str_x[:3])
        for n, func in [(D, "D"), (S, "S"), (L, "L"), (R, "R")]:
            graph[n] = funcs + func
            if n == target:
                q = False
                break
            q.append((n, graph[n]))
    print(graph[target])
