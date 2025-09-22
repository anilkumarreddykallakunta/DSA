/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
   let curCount =0;
   let maxCount =0;
   for(let i=0;i<nums.length;i++){
    if(nums[i]==1){
        curCount++;
        maxCount = Math.max(curCount,maxCount);
    }
    else{
        maxCount = Math.max(curCount,maxCount);
        curCount =0;
    }

   }
   return maxCount;
};