# 중복 조합
def dfs(arr, index):
    if len(arr) == m:
        print(*arr)
        return

    for i in range(index, n):
        arr.append(i + 1)
        dfs(arr, i)
        arr.pop()


n, m = map(int, input().split())
dfs([], 0)

# 1 1
# 1 2
# 1 3
# 1 4
# 2 2
# 2 3
# 2 4
# 3 3
# 3 4
# 4 4
