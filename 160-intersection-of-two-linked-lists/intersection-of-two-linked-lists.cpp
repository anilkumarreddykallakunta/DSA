/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        vector<ListNode*> store;
        while(headB){
            store.push_back(headB);
            headB = headB->next;
        }
        while(headA){
           if (find(store.begin(), store.end(), headA) != store.end())
{
                return headA;
            }
            headA = headA->next;
        }
        return nullptr;
    }
};