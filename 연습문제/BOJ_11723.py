import sys

input = sys.stdin.readline
n = int(input())
dictionary = {}
al = {str(key): True for key in range(1, 21)}
onlyStr = ["all", "empty"]

for _ in range(n):
    string = input().strip()
    command, k = (string.split() + [None])[:2]

    if command == "add":
        dictionary[k] = True
    elif command == "remove" and k in dictionary:
        dictionary.pop(k)
    elif command == "check":
        print(1 if k in dictionary else 0)
    elif command == "toggle":
        if k in dictionary:
            dictionary.pop(k)
        else:
            dictionary[k] = True
    elif command == "all":
        dictionary = al.copy()
    elif command == "empty":
        dictionary = {}
