/**
 Do not return anything, modify nums in-place instead.
 */

function rotate(nums: number[], k: number): void {
    let l = nums.length-1;
    if (l === 0) {
        return;
    }
    if (k > l) {
        k = k%(l+1);
    }
    if (k === 0 || k === l+1) {
        return;
    }

    let index = 0;
    let numsCopy = [...nums];

    for (let i = l-k+1; i <= l; i++) {
        nums[index] = numsCopy[i];
        index++;
    }

    for (let i = 0; i <= l-k; i++) {
        nums[index] = numsCopy[i];
        index++;
    }
};