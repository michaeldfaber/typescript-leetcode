import { TreeNode } from "../../Types/TreeNode";

function isSymmetric(root: TreeNode | null): boolean {
    if (root === null) return true;
    return compare(root.left, root.right);
};

function compare(left: TreeNode, right: TreeNode): boolean {
    if (left === null && right === null) return true;
    if (left !== null && right !== null) {
        return left.val === right.val 
            && compare(left.left, right.right)
            && compare(left.right, right.left);
    }
    return false;
}