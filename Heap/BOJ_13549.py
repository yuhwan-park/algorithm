# 다익스트라
import heapq as hq

n, m = map(int, input().split())
MAX, INF = 100000, float("inf")
memo = [INF] * (MAX + 1)
q = [(0, n)]
while q:
    sec, n = hq.heappop(q)

    if memo[n] < sec or memo[n] != INF:
        continue
    memo[n] = sec
    if n * 2 <= MAX:
        hq.heappush(q, (sec, n * 2))
    if n + 1 <= MAX:
        hq.heappush(q, (sec + 1, n + 1))
    if n > 0:
        hq.heappush(q, (sec + 1, n - 1))
print(memo[m])
