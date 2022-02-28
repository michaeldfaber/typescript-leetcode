function findPeakElement(nums: number[]): number {
    let low = 0;
    let high = nums.length - 1;
    
    while (low < high) {
        let midOne = Math.floor((low+high)/2);
        let midTwo = midOne + 1;
        
        if (nums[midOne] < nums[midTwo]) {
            low = midTwo;
        } else {
            high = midOne;
        }
    }
    
    return low;
};