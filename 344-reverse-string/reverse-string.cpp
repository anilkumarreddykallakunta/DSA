class Solution {
public:
    void reverseString(vector<char>& s) {
        int n = s.size();
        int halfsize = n/2;
        for(int i =0;i<halfsize;i++){
            swap(s[i],s[n-i-1]);
        }
    }
};