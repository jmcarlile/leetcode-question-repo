class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        lowerIndex = 0
        upperIndex = 1
        profit = 0

        while upperIndex < len(prices):
            if prices[upperIndex] < prices[lowerIndex]:
                lowerIndex = upperIndex
            else:
                if  prices[upperIndex] - prices[lowerIndex] > profit:
                    profit = prices[upperIndex] - prices[lowerIndex]
            upperIndex = upperIndex + 1
        
        return profit
