// I know this repo is for TS, but I really wanted to make sure I understand this problem

public class Solution {
    public int MaxProfit(int[] prices) {
        var l = prices.Length - 1;
        var profit = 0;
        var currentMin = 100001;
        
        for (int i = 0; i <= l; i++) {
            if (prices[i] < currentMin) {
                currentMin = prices[i];
                continue;
            }
            if (prices[i] - currentMin > profit) {
                profit = prices[i] - currentMin;
            }
        }
        
        return profit;
    }
}