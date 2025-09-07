/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let mini = prices[0];
    let maxProfit =0;
    for(let i =1;i<prices.length;i++){
        let cost = prices[i] - mini;
        maxProfit = Math.max(cost,maxProfit);
        mini = Math.min(mini,prices[i]);

    }
    return maxProfit;
};