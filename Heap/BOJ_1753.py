# 다익스트라
import sys, heapq as hq

input = sys.stdin.readline
n, m = map(int, input().split())
start = int(input())
graph = [[] for _ in range(n + 1)]
for _ in range(m):
    s, e, weight = map(int, input().strip().split())
    graph[s].append((weight, e))

q = []
INF = float("inf")
weights = [INF for _ in range(n + 1)]
weights[start] = 0
hq.heappush(q, (0, start))
while q:
    weight, node = hq.heappop(q)

    if weights[node] < weight:
        continue

    for node_weight, next_node in graph[node]:
        sum_ = node_weight + weight
        if sum_ < weights[next_node]:
            weights[next_node] = sum_
            hq.heappush(q, (sum_, next_node))
for x in weights[1:]:
    print("INF" if x == INF else x)
