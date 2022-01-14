// O(n^2)

function sortedSquares(nums: number[]): number[] {
    let l = nums.length-1;
    
    for (let i = 0; i <= l; i++) {
        nums[i] = Math.pow(nums[i], 2);
    }
    
    nums.sort((n1, n2) => {
        if (n1 < n2) {
            return n1;
        }
    });
    return nums;
};

// O(n)

function sortedSquares2(nums: number[]): number[] {
    let i = 0;
    let j = nums.length-1;
    let result: number[] = [];
    let resultIndex = nums.length-1;
    
    while (j-i >= 0) {
        if (Math.pow(nums[i], 2) < Math.pow(nums[j], 2)) {
            result[resultIndex] = Math.pow(nums[j], 2);
            j--;
        } else {
            result[resultIndex] = Math.pow(nums[i], 2);
            i++;
        }
        resultIndex--;
    }
    
    return result;
};