import sys

input = sys.stdin.readline
n, m = map(int, input().split())
nums = [int(input()) for _ in range(n)]
nums.sort()
end = 1
answer = float("inf")
for start in range(n):
    while end < n - 1 and abs(nums[start] - nums[end]) < m:
        end += 1
    if abs(nums[start] - nums[end]) >= m:
        answer = min(answer, abs(nums[start] - nums[end]))
print(answer)
