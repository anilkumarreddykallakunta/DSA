class Solution {
public:
    int fib(int n) {
        int a =0;
        int b=1;
        if(n==1 || n==0) return n;
        for(int i=2;i<=n;i++){
            int temp=a;
            a=b;
            b = temp+b;
        }
        return b;
    }
};