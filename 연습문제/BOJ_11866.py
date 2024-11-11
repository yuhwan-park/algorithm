from collections import deque

n, m = map(int, input().split())
answer = []
q = deque(list(range(1, n + 1)))
while q:
    for _ in range(m - 1):
        q.append(q.popleft())
    answer.append(q.popleft())

print(f'<{", ".join(map(str, answer))}>')
