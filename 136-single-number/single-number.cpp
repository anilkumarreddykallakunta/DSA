class Solution {
public:
    int singleNumber(vector<int>& nums) {
        unordered_map<int,int> single;
        for(int i=0;i<nums.size();i++){
          if(!single[nums[i]]){
              single[nums[i]]=1;
          }
          else{
              single[nums[i]]++;
          }
        }
        for(int i=0;i<nums.size();i++){
            if(single[nums[i]]==1){
                return nums[i];
            }
        }
        return -1;
    }
};