function singleNumberII(nums: number[]): number {
    let map: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] === undefined) {
            map[nums[i]] = 1;
        } else {
            map[nums[i]]++;
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] === 1) {
            return nums[i];
        }
    }
};