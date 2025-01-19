n = int(input())
ops = input().split()

answers = []
visited = [False] * 10


def dfs(arr):
    global answers, visited
    if len(arr) == n + 1:
        answers.append("".join(arr))
        return

    for i in range(10):
        if not visited[i]:
            cur = len(arr)
            if (
                cur == 0
                or (ops[cur - 1] == "<" and int(arr[-1]) < i)
                or (ops[cur - 1] == ">" and int(arr[-1]) > i)
            ):
                visited[i] = True
                arr.append(str(i))
                dfs(arr)
                visited[i] = False
                arr.pop()


dfs([])
answers.sort()
print(answers[0])
print(answers[-1])
