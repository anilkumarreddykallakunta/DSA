class Solution {
    public int removeDuplicates(int[] nums) {
        int x =0;
        int n = nums.length;
        for(int i =1;i<n;i++){
            if(nums[i]>nums[x]){
                x++;
                nums[x] = nums[i];
            }
        }
        return x+1;
    }
}