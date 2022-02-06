import { TreeNode } from "../../Types/TreeNode";

function goodNodes(root: TreeNode | null): number {
    // only objects can be passed by reference in TypeScript
    let good = { count: 1 }; // root is always good
    goodNodesHelper(root, [root.val], good);
    return good.count;
};

function goodNodesHelper(node: TreeNode | null, path: number[], good: any) {
    if (node.left !== null) {
        // increment if left node is "good"
        if (greatestInPath(path, node.left.val)) good.count++;
        // create a deep copy of path
        let newPathLeft = [...path];
        // append left to new path
        newPathLeft.push(node.left.val);
        // call recursive function for left
        goodNodesHelper(node.left, newPathLeft, good);
    }
    
    if (node.right !== null) {
        if (greatestInPath(path, node.right.val)) good.count++;
        let newPathRight = [...path];
        newPathRight.push(node.right.val);
        goodNodesHelper(node.right, newPathRight, good);
    }
}

function greatestInPath(path: number[], val: number): boolean {
    for (let i = 0; i < path.length; i++) {
        if (path[i] > val) return false;
    }
    return true;
}