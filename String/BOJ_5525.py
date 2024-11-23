n = int(input())
m = int(input())
s = input()
lst = []
cnt, ans = 0, 0
for i in range(len(s)):
    if s[i] == "I":
        lst.append(i)
    else:
        continue
for i in range(1, len(lst)):
    if lst[i] - lst[i - 1] == 2:
        cnt += 1
    else:
        cnt = 0

    if cnt >= n:
        ans += 1
print(ans)
