let result: number[][] = [];

function combinationSum(candidates: number[], target: number): number[][] {
    result = [];
    helper(candidates, 0, target, []);
    return result;
};

function helper(candidates: number[], index: number, target: number, path: number[]) {
    if (target < 0) return;
    if (target === 0) {
        result.push(path);
        return;
    }
    
    for (let i = index; i < candidates.length; i++) {
        helper(candidates, i, target-candidates[i], [...path, candidates[i]]);
    }
}