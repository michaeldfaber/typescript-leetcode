function subsetsWithDup(nums: number[]): number[][] {
    let result = [[]];
    nums = nums.sort((n1, n2) => n1 - n2);
    
    for (let i = 0; i < nums.length; i++) {
        let newSets = [];
        for (let j = 0; j < result.length; j++) {
            let newSet = [...result[j]];
            newSet.push(nums[i]);
            newSets.push(newSet);
        }
        
        result = [...result, ...newSets];
        
        while (i < nums.length && nums[i] === nums[i+1]) {
            i++;
            let dupCaseSets = [];
            for (let j = 0; j < newSets.length; j++) {
                let newSet = [...newSets[j]];
                newSet.push(nums[i]);
                dupCaseSets.push(newSet);
            }
            result = [...result, ...dupCaseSets];
            newSets = dupCaseSets;
        }
    }
    
    return result;
}