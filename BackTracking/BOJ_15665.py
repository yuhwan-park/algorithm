n, m = map(int, input().split())
nums = sorted(list(map(int, input().split())))
ans = []


def bt(arr, index):
    if len(arr) == m:
        ans.append(tuple(arr))
        return

    for i in range(index, n):
        arr.append(nums[i])
        bt(arr, index)
        arr.pop()


bt([], 0)
for x in sorted(list(set(ans))):
    print(*x)
