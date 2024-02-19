n = int(input())
q = list(map(int, input().split(" ")))

q.sort()
result = 0
list = []
for x in q:
    result += x
    list.append(result)

print(sum(list))
