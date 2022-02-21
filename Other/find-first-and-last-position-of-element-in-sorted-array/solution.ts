function searchRange(nums: number[], target: number): number[] {
    let start = 0;
    let end = nums.length - 1;
    let mid = Math.floor((start + end)/2);
    
    if (nums[start] === target) mid = start;
    if (nums[end] === target) mid = end;
    
    while (start < mid) {
        if (nums[mid] === target) break;
        if (target < nums[mid]) end = mid;
        if (target > nums[mid]) start = mid;
        
        mid = Math.floor((start + end)/2);
    }
    
    if (nums[mid] !== target) return [-1, -1];
    
    start = mid;
    end = mid;
    
    while (start > 0 && nums[start-1] === target) start -= 1;
    while (end < nums.length-1 && nums[end+1] === target) end += 1;
    
    return [start, end];
};