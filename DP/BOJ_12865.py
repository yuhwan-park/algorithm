# 0-1 냅색 알고리즘 (배낭문제)
import sys

input = sys.stdin.readline
n, weight = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]
dp = [[0] * (weight + 1) for _ in range(n + 1)]

for i in range(1, n + 1):
    for j in range(weight + 1):
        w, v = arr[i - 1]
        if w <= j:
            dp[i][j] = max(v + dp[i - 1][j - w], dp[i - 1][j])
        else:
            dp[i][j] = dp[i - 1][j]
print(dp[-1][-1])
