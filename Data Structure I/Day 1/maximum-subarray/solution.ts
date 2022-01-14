function maxSubArray(nums: number[]): number {
    let currentMax = nums[0]
    let max = nums[0]
    
    for (let i = 1; i < nums.length; i++) {
        if (currentMax + nums[i] > nums[i]) {
            currentMax = currentMax + nums[i];
        } else {
            currentMax = nums[i]
        }
        
        if (max < currentMax) {
            max = currentMax
        }
    }
    
    return max
};