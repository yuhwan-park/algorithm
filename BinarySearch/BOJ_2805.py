import sys

input = sys.stdin.readline

n, m = map(int, input().split())
trees = list(map(int, input().split()))


def get_cut_trees(height):
    return sum(tree - height for tree in trees if tree > height)


left = 0
right = max(trees)

while left <= right:
    mid = (left + right) // 2
    cut = get_cut_trees(mid)
    if cut >= m:
        result = mid
        left = mid + 1
    else:
        right = mid - 1

print(result)
