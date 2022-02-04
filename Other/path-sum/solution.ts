import { TreeNode } from "../../Types/TreeNode";

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    return hasPathSumHelper(root, 0, targetSum);
};

function hasPathSumHelper(node: TreeNode | null, sum: number, targetSum: number): boolean {
    if (node === null) {
        return false;
    }
    
    sum += node.val;
    
    if (node.left === null && node.right === null) {
        return sum === targetSum;
    }
    
    return hasPathSumHelper(node.left, sum, targetSum) || hasPathSumHelper(node.right, sum, targetSum);
}