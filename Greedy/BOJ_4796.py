answer = []
i = 1
while True:
    l, p, v = map(int, input().split())
    if l == 0 and p == 0 and v == 0:
        print("\n".join(answer))
        break
    val = v // p * l
    val += v % p if v % p < l else l
    answer.append(f"Case {i}: {val}")
    i += 1
