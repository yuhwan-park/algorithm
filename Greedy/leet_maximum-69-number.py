class Solution:
    def maximum69Number(self, num: int) -> int:
        numStrings = [i for i in str(num)]

        for i, x in enumerate(numStrings):
            if x == "6":
                numStrings[i] = "9"
                break

        return int("".join(numStrings))
