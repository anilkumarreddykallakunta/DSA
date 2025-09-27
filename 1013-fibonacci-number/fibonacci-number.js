/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n==1 || n ==0) return n;
    let a =0;
    let b=1;
    let i=2;
    while(i<=n){
        let temp=a;
        a=b;
        b = temp + b;
        i++;
    }
    return b;
};