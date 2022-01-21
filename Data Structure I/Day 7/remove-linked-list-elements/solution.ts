import { ListNode } from "../../../Types/ListNode";

function removeElements(head: ListNode | null, val: number): ListNode | null {
    let listHead: ListNode = new ListNode(0, null);
    let list = listHead;
    
    while (head !== null) {
        if (head.val !== val) {
            list.next = head;
            list = list.next;
        }
        
        head = head.next;
    }
    
    list.next = null;
    return listHead.next;
};