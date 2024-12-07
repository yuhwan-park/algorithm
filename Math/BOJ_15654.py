from itertools import permutations

n, m = map(int, input().split())
nums = list(map(int, input().split()))
nums.sort()
arr = list(permutations(nums, m))
for x in arr:
    print(*list(x))
