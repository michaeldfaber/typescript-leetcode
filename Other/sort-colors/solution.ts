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

// alternative solution, not in place

function sortColors2(nums: number[]): void {
    if (nums.length === 1) return;
    
    let zero = 0;
    let one = 0;

    for (let i = 0; i < nums.length; i++) {
        switch (nums[i]) {
            case 0:
                zero++;
                break;
            case 1:
                one++;
                break;
        }
    }

    for (let i = 0; i < zero; i++) nums[i] = 0;
    for (let i = zero; i < zero + one; i++) nums[i] = 1;
    for (let i = zero + one; i < nums.length; i++) nums[i] = 2;
}