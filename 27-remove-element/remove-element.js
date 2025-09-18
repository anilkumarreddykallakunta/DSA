/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let  x =0;
    let n = nums.length;
    for(let i=0;i<n;i++){
        if(nums[i]!=val){
            nums[x] = nums[i];
            x++;
        }
    }
    return x;
};