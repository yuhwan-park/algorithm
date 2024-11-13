import sys
input = sys.stdin.readline
n, m = map(int,(input().split()))
words = {}
for _ in range(n):
    word, pw = input().strip().split()
    words[word] = pw

for _ in range(m):
    word = input().strip()
    print(words[word])
