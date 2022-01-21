import { ListNode } from "../../../Types/ListNode";

function hasCycle(head: ListNode | null): boolean {
    if (head === null) {
        return false;        
    }
    
    let tortoise: ListNode = new ListNode(0, head);
    let hare = head;
    
    while (tortoise !== hare) {
        if (hare.next === null) {
            return false;
        }
        
        if (hare.next.next === null) {
            return false;
        }
        
        tortoise = tortoise.next;
        hare = hare.next.next;
    }
    
    return true;
};