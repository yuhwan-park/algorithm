import sys
from collections import deque

input = sys.stdin.readline
T = int(input())

for _ in range(T):
    funcs = input().strip()
    n = int(input().strip())
    direction = "left"
    q = deque(map(str, list(eval(input().strip()))))
    is_error = False
    for func in funcs:
        if func == "D":
            if not q:
                is_error = True
                break
            if direction == "left":
                q.popleft()
            else:
                q.pop()
        else:
            direction = "right" if direction == "left" else "left"
    if is_error:
        print("error")
        continue
    if direction == "left":
        print(f"[{','.join(list(q))}]")
    else:
        print(f"[{','.join(reversed(list(q)))}]")
