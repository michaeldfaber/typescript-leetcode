function combinationSum3(k: number, n: number): number[][] {
    let result: number[][] = [];
    helper(k, n, 1, [], result);
    return result;
};

function helper(k: number, n: number, index: number, path: number[], result: number[][]) {
    if (n < 0) return;
    if (n === 0) {
        if (path.length === k) result.push(path);
        return;
    }
    
    let limit = 9 < n ? 9 : n;
    for (let i = index; i <= limit; i++) {
        helper(k, n - i, i+1, [...path, i], result);
    }
}