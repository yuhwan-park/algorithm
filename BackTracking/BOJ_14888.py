def dfs(n, i, operators):
    global max_v, min_v, nums
    if i >= len(nums) - 1:
        max_v = max(n, max_v)
        min_v = min(n, min_v)
        return
    plus, minus, multiply, divide = operators
    if plus > 0:
        dfs(n + nums[i + 1], i + 1, (plus - 1, minus, multiply, divide))
    if minus > 0:
        dfs(n - nums[i + 1], i + 1, (plus, minus - 1, multiply, divide))
    if multiply > 0:
        dfs(n * nums[i + 1], i + 1, (plus, minus, multiply - 1, divide))
    if divide > 0:
        if n < 0:
            dfs(abs(n) // nums[i + 1] * -1, i + 1, (plus, minus, multiply, divide - 1))
        else:
            dfs(n // nums[i + 1], i + 1, (plus, minus, multiply, divide - 1))


n = int(input())
nums = list(map(int, input().split()))
plus, minus, multiply, divide = map(int, input().split())
max_v = float("-inf")
min_v = float("inf")
dfs(nums[0], 0, (plus, minus, multiply, divide))
print(max_v)
print(min_v)
