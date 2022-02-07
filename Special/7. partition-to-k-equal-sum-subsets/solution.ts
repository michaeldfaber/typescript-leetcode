function canPartitionKSubsets(nums: number[], k: number): boolean {
    // sum of every element in the array
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    
    // if the sum is not divisible by the subset count k, return false
    if (sum % k !== 0) return false;
    
    // sort array in descending order
    // fill up subsets faster in recursion
    nums = nums.sort((n1, n2) => n2 - n1);
    
    // create an empty list with k 0 elements to represent subset sums
    let subsets: number[] = [];
    for (let i = 0; i < k; i++) {
        subsets.push(0);
    }
    
    // target number for sum of each subset
    const target = sum / k;
    
    // call recursive function
    return createSubsets(nums, subsets, target, 0);
};

function createSubsets(nums: number[], subsets: number[], target: number, index: number): boolean {
    // if the index has reached the end of the array
    // each element in nums has successfully been put in a subset sum
    if (index === nums.length) return true;
    
    // loop through array of subsets sum
    for (let i = 0; i < subsets.length; i++) {
        // if this subset sum is the same as the last subset sum
        // we know this subset sum and index is not the "correct" move
        // because it did not return true on the last iteration
        if (i > 0) {
            if (subsets[i] === subsets[i - 1]) continue;
        }
        
        // if sum of current subset sum and index in nums is less than target
        if (subsets[i] + nums[index] <= target) {
            // try to continue down this route
            subsets[i] += nums[index];
            // if this was the "correct" move this will reach the end and return true
            if (createSubsets(nums, subsets, target, index + 1)) return true;
            // if not undo this change and continue
            subsets[i] -= nums[index];
        }
    }
    
    // tried every combination and was not able 
    // to add every element in nums
    return false;
}