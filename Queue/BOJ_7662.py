import sys
import heapq

input = sys.stdin.readline
T = int(input())
for _ in range(T):
    N = int(input())
    minHeap = []
    maxHeap = []
    deleted = [1] * N
    for i in range(N):
        S, M = input().split()
        M = int(M)
        if S == "I":
            heapq.heappush(minHeap, (M, M, i))
            heapq.heappush(maxHeap, (-M, M, i))
        else:
            if len(minHeap) == 0 and len(maxHeap) == 0:
                continue
            if M == 1:
                deleted[heapq.heappop(maxHeap)[2]] = 0
            else:
                deleted[heapq.heappop(minHeap)[2]] = 0

            while minHeap and deleted[minHeap[0][2]] == 0:
                heapq.heappop(minHeap)
            while maxHeap and deleted[maxHeap[0][2]] == 0:
                heapq.heappop(maxHeap)

    if minHeap == []:
        print("EMPTY")
    else:
        print(maxHeap[0][1], minHeap[0][1])
