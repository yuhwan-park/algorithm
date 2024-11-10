import sys

input = sys.stdin.readline

n = int(input())
map_a = {n: True for n in input().split()}
m = int(input())
for n in input().split():
    print(1 if n in map_a else 0)
