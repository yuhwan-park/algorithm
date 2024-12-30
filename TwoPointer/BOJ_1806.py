n, m = map(int, input().split())
nums = list(map(int, input().split()))
INF = float("inf")
answer = INF
count = 0
interval_sum = 0
end = 0
for start in range(n):
    while interval_sum < m and end < n:
        interval_sum += nums[end]
        end += 1
        count += 1
    if interval_sum >= m:
        answer = min(answer, count)
    interval_sum -= nums[start]
    count -= 1
print(0 if answer == INF else answer)
