function combinationSum2(candidates: number[], target: number): number[][] {
    let result: number[][] = [];
    candidates = candidates.sort((n1, n2) => n1 - n2);
    helper(candidates, 0, target, [], result);
    return result;
};

function helper(candidates: number[], index: number, target: number, path: number[], result: number[][]) {
    if (target < 0) return;
    if (target === 0) {
        result.push(path);
        return;
    }
    
    for (let i = index; i < candidates.length; i++) {
        if (i > 0 && i > index && candidates[i] === candidates[i-1]) continue;
        helper(candidates, i+1, target-candidates[i], [...path, candidates[i]], result);
    }
}