/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let size = s.length;
    let halfSize = Math.floor(size/2);
    for(let i=0;i<halfSize;i++){
        let tem = s[i];
        s[i] = s[size - i - 1];
        s[size - i - 1] = tem;
    }
};



