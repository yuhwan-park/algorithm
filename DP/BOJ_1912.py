n = int(input())
nums = list(map(int, input().split()))
dp = [0] * n
answer = -10001
for i in range(n):
    dp[i] = max(dp[i - 1] + nums[i], nums[i])
    answer = max(answer, dp[i])
print(answer)
