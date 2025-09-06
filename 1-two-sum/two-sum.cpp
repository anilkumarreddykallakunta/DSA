class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int,int> anil;
        int n= nums.size();
        for(int i =0;i<n;i++){
            int diff = target - nums[i];
            if(anil.count(diff)){
                return{anil[diff],i};
            }
            anil[nums[i]] = i;
        }
        return{};
        
    }
};