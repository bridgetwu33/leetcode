/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let node = head;
    let sz = 0;
    // go through linked list and count how many nodes
    while(node !== null) {
        sz++;
        node = node.next;
    }

    // reset our current node
    node = head;

    if(sz - n === 0) return head.next;

    // advance our current position until we reach n - 1
    while(sz - n - 1 > 0) {
        n++;
        node = node.next;
    }

    // set (n - 1).next node to n + 1, which is (n - 1).next.next
    node.next = node.next ? node.next.next : null;

    return head;
};