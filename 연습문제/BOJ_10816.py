n = int(input())
hash_map = {}
for num in input().split():
    if num in hash_map:
        hash_map[num] += 1
    else:
        hash_map[num] = 1
m = int(input())
answer = [hash_map[num] if num in hash_map else 0 for num in input().split()]
print(*answer)
