import sys

input = sys.stdin.readline
n, m = map(int, input().split())
arr = {input().strip(): True for _ in range(n)}
answer = []
for _ in range(m):
    s = input().strip()
    if s in arr:
        answer.append(s)
answer.sort()
print(len(answer))
print("\n".join(answer))
