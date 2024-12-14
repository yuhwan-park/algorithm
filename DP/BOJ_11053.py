n = int(input())
nums = list(map(int, input().split()))
max_count = 1
dp = [1] * n
for i in range(n):
    count = 0
    for j in range(i):
        if nums[i] > nums[j]:
            count = max(count, dp[j] + 1)
    dp[i] = max(dp[i], count)
print(max(dp))
