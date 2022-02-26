class Solution(object):
    def characterReplacement(self, s, k):
        res = 0
        count = {}
        l = 0
        
        for r in range(0, len(s)):
            count[s[r]] = 1 + count.get(s[r], 0)
            # r-l+1 is windowsize
            while(r-l+1 - max(count.values()) > k):
                count[s[l]] -= 1
                l += 1
            
            res = max(res, r-l+1)
        
        return res
            
        