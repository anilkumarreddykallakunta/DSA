/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let  n = prices.length;
  let maxProfit =0;
  let mini = prices[0];
  for(let i =1;i<n;i++){
    let cost = prices[i] - mini;
    maxProfit = Math.max(maxProfit,cost);
    mini = Math.min(mini,prices[i]);
  }  
  return maxProfit;
};