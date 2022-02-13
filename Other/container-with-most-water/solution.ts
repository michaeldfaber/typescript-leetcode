function maxArea(height: number[]): number {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    
    while (left < right) {
        let container = Math.min(height[left], height[right]) * (right - left);
        if (max < container) max = container;
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return max;
};