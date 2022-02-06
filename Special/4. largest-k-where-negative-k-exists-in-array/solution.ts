// this problem is not actually on leetcode
// test cases here: https://www.typescriptlang.org/play

function largestK(nums: number[]): number {
    let max = 0;
    let map: Map<number, boolean> = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) continue;
        map.set(nums[i], true);

        if (map.get(nums[i] * -1)) {
            if (max < Math.abs(nums[i])) max = Math.abs(nums[i]);
        }
    }

    return max;
}