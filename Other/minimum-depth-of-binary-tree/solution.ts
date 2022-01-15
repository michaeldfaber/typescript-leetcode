import { TreeNode } from "../../Types/TreeNode";

function minDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }
    
    return minDepthHelper(root);
};

function minDepthHelper(root: TreeNode | null): number {
    if (root === null) {
        return 1000000001;
    }
    
    if (root.left === null && root.right === null) {
        return 1;
    }
    
    return 1 + Math.min(minDepthHelper(root.left), minDepthHelper(root.right));
}