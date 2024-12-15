# 다익스트라
import sys, heapq

input = sys.stdin.readline
n = int(input())
m = int(input())
graph = [[] for _ in range(n + 1)]
for _ in range(m):
    start, end, distance = map(int, input().strip().split())
    graph[start].append((distance, end))
start, end = map(int, input().strip().split())
INF = float("inf")
distance_list = [INF for _ in range(n + 1)]
distance_list[start] = 0
heap = [(0, start)]
while heap:
    distance, n = heapq.heappop(heap)

    if distance_list[n] < distance:
        continue

    for dis, m in graph[n]:
        if dis + distance < distance_list[m]:
            distance_list[m] = dis + distance
            heapq.heappush(heap, (dis + distance, m))
print(distance_list[end])
