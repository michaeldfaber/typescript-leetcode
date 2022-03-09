function permute(nums: number[]): number[][] {
    let result: number[][] = [];
    if (nums.length === 1) {
        result.push(nums);
        return result;
    }
    
    result.push([nums[0]]);
    
    for (let i = 1; i < nums.length; i++) {
        let newResult: number[][] = [];
        for (let j = 0; j < result.length; j++) {
            for (let k = 0; k <= result[j].length; k++) {
                let a = [...result[j]];
                a.splice(k, 0, nums[i]);
                newResult.push(a);
            }
        }
        result = newResult;
    }
    
    return result;
};