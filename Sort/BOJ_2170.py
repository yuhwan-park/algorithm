import sys

input = sys.stdin.readline
n = int(input())
lines = [list(map(int, input().strip().split())) for _ in range(n)]
lines.sort()
answer = 0
start, end = lines[0][0], lines[0][1]
for i in range(1, n):
    cur_s, cur_e = lines[i]
    if cur_s <= end:
        if cur_e > end:
            end = cur_e
    else:
        answer += end - start
        start = cur_s
        end = cur_e
answer += end - start
print(answer)
