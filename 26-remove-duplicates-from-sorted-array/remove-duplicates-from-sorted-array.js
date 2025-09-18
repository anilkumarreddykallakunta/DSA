/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let x =0;
    let n = nums.length;
    
    for(let i=1;i<n;i++){
        if(nums[i]>nums[x]){
            x++;
            nums[x] = nums[i];
        }
    }
    return x+1;
};