/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let arr = [];
    while(headB){
        arr.push(headB);
        headB = headB.next;
    }
    while(headA){
        if(arr.includes(headA)) return headA;
        headA = headA.next;
    }
    return null;
};