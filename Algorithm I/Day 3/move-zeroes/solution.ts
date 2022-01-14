/**
 Do not return anything, modify nums in-place instead.
 */

function moveZeroes(nums: number[]): void {
    let l = nums.length - 1;
    if (l === 0) {
        return;
    }
    
    let index = 0;
    let zeroCount = 0;
    for (let i = 0; i <= l; i++) {
        if (nums[i] === 0) {
            zeroCount++;
        } else {
            nums[index] = nums[i];
            index++;
        }
    }

    for (let i = index; i <= l; i++) {
        nums[i] = 0;
    }
};