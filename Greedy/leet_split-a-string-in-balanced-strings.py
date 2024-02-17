class Solution:
    def balancedStringSplit(self, s: str) -> int:
        result = 0
        rc, lc = 0, 0
        for x in s:
            if x == "R":
                rc += 1
            else:
                lc += 1

            if rc == lc:
                result += 1
                rc = 0
                lc = 0
        return result
