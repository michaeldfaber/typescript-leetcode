import { ListNode } from "../../../Types/ListNode";

function middleNode(head: ListNode | null): ListNode | null {
    let linkedlist = head;
    let length = 0;
    
    while (linkedlist.next !== null) {
        length++;
        linkedlist = linkedlist.next;
    }
    
    for (let i = 0; i < Math.ceil(length/2); i++) {
        head = head.next;
    }
    
    return head;
};