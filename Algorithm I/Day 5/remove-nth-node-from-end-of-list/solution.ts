import { ListNode } from "../../../Types/ListNode";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (head.next === null) {
        return null;
    }
    
    let current = head.next;
    let depth = 2;
    
    while (current.next !== null) {
        current = current.next;
        depth++;
    }
    
    current = head;
    let elementToRemove = depth - n;
    
    if (elementToRemove === 0) {
        return head.next;
    }
    
    for (let i = 0; i < elementToRemove-1; i++) {
        current = current.next;
    }
    
    if (n === 1) {
        current.next = null;
    } else {
        current.next = current.next.next;
    }
    
    return head;
};