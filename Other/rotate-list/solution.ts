import { ListNode } from "../../Types/ListNode";

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (head === null) return head;
    if (head.next === null) return head;
    
    let current = head;
    let depth = 1;
    while (current.next !== null) {
        current = current.next;
        depth++;
    }
    
    k = k % depth;
    if (k === 0) return head;
    current = head;
    
    for (let i = 0; i < depth-k-1; i++) {
        current = current.next;
    }
    
    let newHead = current.next;
    let newHeadLoop = newHead;
    current.next = null;
    
    while (newHeadLoop.next !== null) {
        newHeadLoop = newHeadLoop.next;
    }
    
    newHeadLoop.next = head;
    return newHead;
};