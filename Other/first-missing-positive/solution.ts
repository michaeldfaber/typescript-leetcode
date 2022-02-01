function firstMissingPositive(nums: number[]): number {
    let min = Number.MAX_VALUE;
    let map: Map<number, boolean> = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= 0) {
            continue;
        }
        
        if (min > nums[i]) {
            min = nums[i];
        }
        
        if (map[nums[i]] === undefined) {
            map[nums[i]] = true;
        }
    }
    
    if (min > 1) {
        return 1;
    }
    
    while (true) {
        if (map[min] === true) {
            min++;
            continue;
        }
        
        return min;
    }
};