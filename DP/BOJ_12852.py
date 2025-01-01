n = int(input())
MAX = 10**6 + 1
INF = float("inf")
dp = [INF] * MAX
element_dp = [[]] * MAX
dp[1] = 0
element_dp[1] = [1]
for i in range(1, MAX):
    if i + 1 < MAX and dp[i] + 1 < dp[i + 1]:
        dp[i + 1] = dp[i] + 1
        element_dp[i + 1] = element_dp[i].copy() + [i]
    if i * 2 < MAX and dp[i] + 1 < dp[i * 2]:
        dp[i * 2] = dp[i] + 1
        element_dp[i * 2] = element_dp[i].copy() + [i]
    if i * 3 < MAX and dp[i] + 1 < dp[i * 3]:
        dp[i * 3] = dp[i] + 1
        element_dp[i * 3] = element_dp[i].copy() + [i]
print(dp[n])
print(*sorted(list(set(element_dp[n] + [n])), reverse=True))
