class Solution {
public:
    int fib(int n) {
        if(n==0) return n;
        if(n==1) return n ;
        int i=2;
        int a=0;
        int b=1;
        while(i<=n){
            int temp =a;
            a=b;
            b = a + temp;
            i++;
        }
return b;
    }
};