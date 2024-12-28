import sys
from collections import deque

input = sys.stdin.readline
n = int(input())
arr = [input() for _ in range(n)]
friends = []
answer = 0
for i in range(n):
    freinds_index = [j for j in range(n) if arr[i][j] == "Y"]
    friends.append(freinds_index)
for i in range(n):
    q = deque([friends[i]])
    visited = [False] * n
    visited[i] = True
    count = 0
    distance = 0
    while q and distance < 2:
        friends_list = q.popleft()
        temp = []
        for x in friends_list:
            if visited[x]:
                continue
            visited[x] = True
            count += 1
            for second_friend in friends[x]:
                temp.append(second_friend)
        distance += 1
        if temp:
            q.append(temp)
    answer = max(answer, count)
print(answer)
