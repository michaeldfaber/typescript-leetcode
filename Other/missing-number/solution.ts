function missingNumber(nums: number[]): number {
    let map: Map<number, boolean> = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = true;
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (!map[i]) return i;
    }
    
    return nums.length;
}