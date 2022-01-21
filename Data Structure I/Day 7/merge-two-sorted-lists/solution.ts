import { ListNode } from "../../../Types/ListNode";

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 === null) {
        return list2 === null ? null : list2;
    }
    
    if (list2 === null) {
        return list1 === null ? null : list1;
    }
    
    let listHead: ListNode = new ListNode(0, null);
    let list = listHead;
    
    while (true) {
        if (list1 === null && list2 === null) {
            break;
        }
        
        if (list1 === null) {
            list.next = list2;
            break;
        }
        
        if (list2 === null) {
            list.next = list1;
            break;
        }
        
        if (list1.val < list2.val) {
            list.next = list1;
            list1 = list1.next;
        } else {
            list.next = list2;
            list2 = list2.next;
        }
        
        list = list.next;
    }
    
    return listHead.next;
};