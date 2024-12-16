import sys

input = sys.stdin.readline
n = int(input())
start = list(map(int, input().strip().split()))
min_dp, max_dp = start.copy(), start.copy()
for _ in range(n - 1):
    n1, n2, n3 = map(int, input().split())
    m1, m2, m3 = min_dp[0], min_dp[1], min_dp[2]
    k1, k2, k3 = max_dp[0], max_dp[1], max_dp[2]
    min_dp[0] = min(n1 + m1, n1 + m2)
    min_dp[1] = min(n2 + m1, n2 + m2, n2 + m3)
    min_dp[2] = min(n3 + m2, n3 + m3)
    max_dp[0] = max(n1 + k1, n1 + k2)
    max_dp[1] = max(n2 + k1, n2 + k2, n2 + k3)
    max_dp[2] = max(n3 + k2, n3 + k3)
print(max(max_dp), min(min_dp))
