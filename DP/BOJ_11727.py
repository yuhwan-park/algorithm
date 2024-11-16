n = int(input())
dp = [1, 1] + [0] * 1000
for i in range(2, 1001):
    dp[i] = dp[i - 1] + dp[i - 2] * 2

print(dp[n] % 10007)
