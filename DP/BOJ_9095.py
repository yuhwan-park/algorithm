n = int(input())
dp = [0, 1, 2, 4] + [0] * 9

for i in range(4, 11):
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]

for _ in range(n):
    print(dp[int(input())])
