from itertools import permutations

n, m = map(int, input().split())
nums = list(map(int, input().split()))
arr = list(set(permutations(nums, m)))
arr.sort()
for x in arr:
    print(*x)
