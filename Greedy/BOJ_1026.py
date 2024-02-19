import sys

input = sys.stdin.readline

N = int(input())
a = list(map(int, input().split()))
b = list(map(int, input().split()))
a.sort()
b.sort(reverse=True)

result = 0
for x in range(N):
    result += a[x] * b[x]

print(result)
