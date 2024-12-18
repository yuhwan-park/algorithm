# 순열
def dfs(arr):
    if len(arr) == m:
        print(*arr)
        return

    for i in range(n):
        if not visited[i]:
            arr.append(i + 1)
            visited[i] = True
            dfs(arr)
            arr.pop()
            visited[i] = False


n, m = map(int, input().split())
visited = [False] * (n + 1)
dfs([])

# 1 2
# 1 3
# 1 4
# 2 1
# 2 3
# 2 4
# 3 1
# 3 2
# 3 4
# 4 1
# 4 2
# 4 3
