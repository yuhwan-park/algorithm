total = int(input())
reqs = list(map(int, input().split()))
m, k = map(int, input().split())

t_shirts = 0
for n in reqs:
    t_shirts += ((n - 1) // m) + 1

print(t_shirts)
print(f"{total // k} {total % k}")
