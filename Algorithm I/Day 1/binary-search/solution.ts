function binarySearch(nums: number[], target: number): number {
    let low = 0;
    let high = nums.length-1;
    
    if (nums[low] === target) {
        return low;
    }
    
    if (nums[high] === target) {
        return high;
    }
    
    let mid = Math.ceil((low+high)/2);
    while (mid < high) {        
        if (nums[mid] === target) {
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
    
    return -1;
};