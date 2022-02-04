import { TreeNode } from "../../Types/TreeNode";

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null) {
        return true;
    }
    
    if ((p === null && q !== null) || (q === null && p !== null)) {
        return false;
    }
    
    if (p.val === q.val) {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    } else {
        return false;
    }
};