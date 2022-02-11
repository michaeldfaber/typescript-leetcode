import { TreeNode } from "../../Types/TreeNode";

let result: number[] = [];

function inorderTraversal(root: TreeNode | null): number[] {
    result = [];
    helper(root);
    return result;
}

function helper(node: TreeNode | null) {
    if (node === null) return;
    helper(node.left);
    result.push(node.val);
    helper(node.right);
}