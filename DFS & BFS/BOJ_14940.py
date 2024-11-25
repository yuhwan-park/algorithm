import sys
from collections import deque

input = sys.stdin.readline
n, m = map(int, input().split())
table = [list(map(int, input().split())) for _ in range(n)]
answer = [[False] * m for _ in range(n)]
dx, dy = [-1, 1, 0, 0], [0, 0, -1, 1]
start = (0, 0)


def find_target(n, m):
    global start, table
    for i in range(n):
        for j in range(m):
            if table[i][j] == 2:
                start = (i, j)
                return


find_target(n, m)
q = deque([[(start[0], start[1])]])
answer[start[0]][start[1]] = "start"
distance = 0
while q:
    list_ = []
    for x, y in q.popleft():
        if table[x][y] == 0:
            continue
        if answer[x][y] and answer[x][y] != "start":
            continue
        if table[x][y] == 1:
            answer[x][y] = distance
        for i in range(4):
            nx, ny = (x + dx[i], y + dy[i])
            if nx < 0 or nx >= n or ny < 0 or ny >= m:
                continue
            list_.append((nx, ny))
    if list_:
        distance += 1
        q.append(list_)

for i in range(n):
    answer_list = []
    for j in range(m):
        if table[i][j] == 0 or answer[i][j] == "start":
            answer_list.append(0)
        elif answer[i][j] == False:
            answer_list.append(-1)
        else:
            answer_list.append(answer[i][j])
    print(*answer_list)
