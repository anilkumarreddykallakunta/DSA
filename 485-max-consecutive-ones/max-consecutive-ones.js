/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let curCount =0;
    let maxCount =0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==1){
            curCount+=1;
            maxCount = Math.max(maxCount,curCount);
        }
        else{
            curCount =0;
             maxCount = Math.max(maxCount,curCount);
        }
    }
    return maxCount;
};