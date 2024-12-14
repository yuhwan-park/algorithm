import sys

input = sys.stdin.readline
n = int(input())
tree = {}
for _ in range(n):
    parent, left, right = input().strip().split()
    tree[parent] = (left, right)
pre, in_, post = [], [], []


def preorder(node, tree, arr):
    if node == ".":
        return
    left, right = tree[node]
    arr.append(node)
    preorder(left, tree, arr)
    preorder(right, tree, arr)


def inorder(node, tree, arr):
    if node == ".":
        return
    left, right = tree[node]
    inorder(left, tree, arr)
    arr.append(node)
    inorder(right, tree, arr)


def postorder(node, tree, arr):
    if node == ".":
        return
    left, right = tree[node]
    postorder(left, tree, arr)
    postorder(right, tree, arr)
    arr.append(node)


preorder("A", tree, pre)
inorder("A", tree, in_)
postorder("A", tree, post)

print("".join(pre))
print("".join(in_))
print("".join(post))
