/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let size = s.length;
    let halfSize = Math.floor(size/2);
    let left = 0;
    let right = size-1;
    for(let i =0;i<halfSize;i++){
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
};