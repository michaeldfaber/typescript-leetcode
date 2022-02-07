// this problem is not actually on leetcode
// test here: https://www.typescriptlang.org/play

function minStepsPile(nums: number[]): number {
    // edge cases
    if (nums.length <= 1) return 0;

    // count steps
    let steps = 0;

    // count number of steps it will take to bring current value down to minimum
    let n = 0;

    // sort array in ascending order
    nums = nums.sort((n1, n2) => n1 - n2);

    for (let i = 1; i < nums.length; i++) {
        // if element is greater than last element,
        if (nums[i] !== nums[i-1]) {
            n++; // it will require another step to bring it down to the minimum
        }
        steps += n; // count steps for current element
        // works for initial minimum values because step is initialized as 0
    }
    
    return steps;
}

// test cases
console.log(minStepsPile([50]) == 0)
console.log(minStepsPile([10, 10]) == 0)
console.log(minStepsPile([5, 2, 1]) == 3)
console.log(minStepsPile([4, 2, 1]) == 3)
console.log(minStepsPile([4, 5, 5, 4, 2]) == 6)
console.log(minStepsPile([4, 8, 16, 32]) == 6)
console.log(minStepsPile([4, 8, 8]) == 2)
console.log(minStepsPile([4, 4, 8, 8]) == 2)
console.log(minStepsPile([1, 2, 2, 3, 3, 4]) == 9)
console.log(minStepsPile([1, 1, 2, 2, 2, 3, 3, 3, 4, 4]) == 15)