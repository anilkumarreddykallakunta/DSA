/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hash = {};
    let n = nums.length;
    for(let i=0;i<n;i++){
        if(!hash[nums[i]]){
            hash[nums[i]] =1;
        }
        else{
            hash[nums[i]]++;
        }
    }
    for(let i=0;i<n;i++){
        if(hash[nums[i]]==1){
            return nums[i];
        }
    }
};