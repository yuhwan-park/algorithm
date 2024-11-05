import sys

input = sys.stdin.readline
n, m = map(int, input().split())
dic = {}
arr = [False for _ in range(n + 1)]
for i in range(n):
    p = input().strip()
    dic[p] = i
    arr[i + 1] = p

for _ in range(m):
    p = input().strip()
    if p.isdigit():
        print(arr[int(p)])
    else:
        print(dic[p] + 1)
