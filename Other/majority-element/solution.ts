function majorityElement(nums: number[]): number {
    let max: any = { num: 0, freq: 0 };
    let map: Map<number, number> = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
        if (max.freq < map.get(nums[i])) {
            max.num = nums[i];
            max.freq = map.get(nums[i]);
        }
    }
    
    return max.num;
};