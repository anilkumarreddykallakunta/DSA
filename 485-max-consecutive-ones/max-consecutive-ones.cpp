class Solution {
public:
    int findMaxConsecutiveOnes(vector<int>& nums) {
        int curCount =0;
        int maxCount =0;
        for(int i=0;i<nums.size();i++){
            if(nums[i]==0){
                curCount=0;
                maxCount = max(curCount,maxCount);
            }
            else{
                curCount++;
                maxCount = max(curCount,maxCount);
            }
        }
        return maxCount;
    }
};