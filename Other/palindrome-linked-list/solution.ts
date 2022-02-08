import { ListNode } from "../../Types/ListNode";

function isPalindrome(head: ListNode | null): boolean {
    if (head.next === null) return true;
    let nums: number[] = [];
    
    let current = head;
    while (current !== null) {
        nums.push(current.val);
        current = current.next;
    }
    
    for (let i = 0; i <= nums.length/2; i++) {
        if (nums[i] !== nums[nums.length-1-i]) return false;
    }
    
    return true;
};