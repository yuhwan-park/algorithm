n = int(input())
dp = [0, 1, 2, 3, 5] + [0] * 1000
for i in range(5, 1001):
    dp[i] = dp[i - 1] + dp[i - 2]
print(dp[n] % 10007)
