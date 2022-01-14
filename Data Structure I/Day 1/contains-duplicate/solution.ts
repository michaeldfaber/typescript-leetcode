// O(n^2)

function containsDuplicate(nums: number[]): boolean {
    let l = nums.length;
    for (let i = 0; i < l; i++) {
        for (let j = i+1; j < l; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
};

// O(n)
// couldn't actually get this to run, but the idea is there

function containsDuplicate2(nums: number[]): boolean {
    let l = nums.length;
    let uniqueNumbers: Map<any, any> = new Map();
    for (let i = 0; i < l; i++) {
        if (uniqueNumbers.get(i)) {
            return true;
        } else {
            uniqueNumbers.set(i, true);
        }
    }
    return false;
};