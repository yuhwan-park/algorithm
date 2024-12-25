import sys, heapq as hq

input = sys.stdin.readline
n = int(input())
m = int(input())
votes = list(map(int, input().split()))
vote_table = [0] * 101
q = []
for i in range(m):
    if vote_table[votes[i]] == 0 and len(q) < n:
        vote_table[votes[i]] += 1
        hq.heappush(q, (vote_table[votes[i]], i, votes[i]))
    elif vote_table[votes[i]]:
        vote_table[votes[i]] += 1
        temp = []
        for vote, weight, j in q:
            if votes[i] == j:
                temp.append((vote + 1, weight, j))
            else:
                temp.append((vote, weight, j))
        hq.heapify(temp)
        q = temp
    else:
        vote_count, weight, index = hq.heappop(q)
        vote_table[index] = 0
        vote_table[votes[i]] += 1
        hq.heappush(q, (vote_table[votes[i]], i, votes[i]))
print(*sorted(list(map(lambda x: x[2], q))))
