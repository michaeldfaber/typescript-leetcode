function searchInsert(nums: number[], target: number): number {
    let low = 0;
    let high = nums.length-1;
    
    if (target <= nums[low]) {
        return low;
    }
    
    if (target > nums[high]) {
        return high+1;
    }
    
    let mid = Math.ceil(high/2);
    while (low < high-1) {
        if (target === nums[mid]) {
            return mid;
        }
        
        if (target < nums[mid]) {
            high = mid;
        }
        
        if (target > nums[mid]) {
            low = mid;
        }
        mid = Math.ceil((low+high)/2);
    }
    
    return high;
};