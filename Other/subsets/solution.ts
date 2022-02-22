function subsets(nums: number[]): number[][] {
    let result = [[]];
    
    for (let i = 0; i < nums.length; i++) {
        let newSets: number[][] = [];
        for (let j = 0; j < result.length; j++) {
            let newSet = [...result[j]];
            newSet.push(nums[i]);
            newSets.push(newSet);
        }
        result = [...result, ...newSets];
    }
    
    return result;
};