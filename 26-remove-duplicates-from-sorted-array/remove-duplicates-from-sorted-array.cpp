class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int x=0;
        int n = nums.size();
        for(int i=1;i<n;i++){
            if(nums[i]>nums[x]){
                x++;
                nums[x] = nums[i];
            }
        }
        return x+1;
    }
};