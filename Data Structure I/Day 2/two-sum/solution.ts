// O(n^2)

function twoSum(nums: number[], target: number): number[] {
    let l = nums.length-1;
    
    for (let i = 0; i <= l; i++) {
        for (let j = i+1; j <= l; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

// O(n)

function twoSum2(nums: number[], target: number): number[] {
    let l = nums.length-1;
    let map: {[key: number]: number} = {};
    for (let i = 0; i <= l; i++) {
        if(map[target-nums[i]] !== undefined) {
            return [map[target-nums[i]], i]
        } else {
            map[nums[i]] = i;
        }
    }
};