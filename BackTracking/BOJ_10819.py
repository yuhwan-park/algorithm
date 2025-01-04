m = int(input())
nums = list(map(int, input().split()))
visited = [False] * m
answer = 0


def dfs(arr):
    global answer
    if len(arr) == m:
        abs_sum = 0
        for j in range(1, len(arr)):
            abs_sum += abs(arr[j - 1] - arr[j])
        answer = max(answer, abs_sum)
        return

    for i in range(m):
        if not visited[i]:
            arr.append(nums[i])
            visited[i] = True
            dfs(arr)
            arr.pop()
            visited[i] = False


dfs([])
print(answer)
