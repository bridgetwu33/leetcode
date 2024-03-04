/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    return function helper(a, b, c) {
        if(!a && !b) return c ? new ListNode(c, undefined) : undefined;

        let sum = c;
        sum += a.val || 0;
        sum += b.val || 0;
        let ret = new ListNode(sum % 10, helper(a.next || 0, b.next || 0, Math.floor(sum / 10)));
        return ret;
    }(l1, l2, 0)
};