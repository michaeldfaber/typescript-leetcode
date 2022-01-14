// O(n^2)

function maxProfit(prices: number[]): number {
    let l = prices.length - 1;
    let max = 0;
    
    for (let i = 0; i < l; i++) {
        for (let j = i+1; j <= l; j++) {
            if (prices[j] - prices[i] > max) {
                max = prices[j] - prices[i];
            }
        }
    }
        
    return max;
};

// O(n)

function maxProfit2(prices: number[]): number {
    let l = prices.length - 1;
    let profit = 0;
    let currentBuy = 100001;
        
    for (let i = 0; i <= l; i++) {
        if (prices[i] < currentBuy) {
            currentBuy = prices[i];
        } else {
            if (prices[i] - currentBuy > profit) {
                profit = prices[i] - currentBuy;
            } 
        }
    }
    
    return profit;
};