// https://en.wikipedia.org/wiki/Dutch_national_flag_problem

function sortColors(nums: number[]): void {
    let i = 0;
    let j = 0;
    let k = nums.length - 1;
    
    while (j <= k) {
        if (nums[j] === 0) {
            swap(nums, i, j);
            i++;
            j++;
            continue;
        }
        
        if (nums[j] === 2) {
            swap(nums, j, k);
            k--;
            continue;
        }
        
        j++;
    }
}

function swap(nums: number[], i: number, j: number) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}