/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let  n = s.length;
    let half = Math.floor(n/2);
    for(let i =0;i<half;i++){
            let temp = s[i];
            s[i] = s[n-i-1];
            s[n-i-1] = temp;
    }

};