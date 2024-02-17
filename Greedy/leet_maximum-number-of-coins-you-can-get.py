from typing import List


class Solution:
    def maxCoins(self, piles: List[int]) -> int:
        sl = [i for i in piles]
        sl.sort(reverse=True)
        bobs = len(sl) // 3
        mine = sl[:-bobs]

        result = 0
        for x in range(1, len(mine), 2):
            result += mine[x]

        return result
