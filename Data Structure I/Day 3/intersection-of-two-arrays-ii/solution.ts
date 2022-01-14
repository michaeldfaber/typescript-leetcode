function intersect(nums1: number[], nums2: number[]): number[] {
    let m = nums1.length - 1;
    let n = nums2.length - 1;
    let result: number[] = [];
    
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (nums1[i] === nums2[j]) {
                result.push(nums1[i]);
                nums2[j] = -1;
                break;
            }
        }
    }
    
    return result;
};