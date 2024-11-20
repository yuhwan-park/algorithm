import sys

input = sys.stdin.readline
n, m = map(int, input().split())
nums = list(map(int, input().split()))

for i in range(1, n):
    nums[i] += nums[i - 1]

for _ in range(m):
    i, j = map(lambda x: int(x) - 1, input().strip().split())
    if i == 0:
        print(nums[j])
    else:
        print(nums[j] - nums[i - 1])
