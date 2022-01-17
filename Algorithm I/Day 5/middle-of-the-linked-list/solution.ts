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

// alternative solution with a Map
// not great for space complexity
function middleNode2(head: ListNode | null): ListNode | null {
    if (head.next === null) {
        return head;
    }
    
    if (head.next.next === null) {
        return head.next;
    }
    
    let linkedlist = head;
    let map: Map<number, ListNode> = new Map();
    let length = 0;
    
    while (linkedlist.next !== null) {
        map[length] = linkedlist;
        linkedlist = linkedlist.next;
        length++;
    }
    
    return map[Math.ceil(length/2)];
};