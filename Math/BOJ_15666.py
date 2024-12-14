from itertools import combinations_with_replacement

n, m = map(int, input().split())
nums = list(map(int, input().split()))
nums.sort()
arr = list(set(combinations_with_replacement(nums, m)))
arr.sort()
for x in arr:
    print(*x)
