// for being a huge meme, this was actually a pretty simple one

import { TreeNode } from "../../Types/TreeNode";

function invertTree(root: TreeNode | null): TreeNode | null {
    if (root === null) return null;
    if (root.left === null && root.right === null) return root;
    
    invertTreeHelper(root);
    return root;
};

function invertTreeHelper(node: TreeNode | null) {
    if (node === null) return;
    
    let temp = node.left;
    node.left = node.right;
    node.right = temp;
    
    invertTreeHelper(node.left);
    invertTreeHelper(node.right);
}