/** Do not return anything, modify nums1 in-place instead. */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    m--;
    n--;
    let i = nums1.length - 1;
    while (n >= 0) {
        if (nums1[m] > nums2[n]) {
            nums1[i] = nums1[m];
            m--;
        } else {
            nums1[i] = nums2[n];
            n--;
        }
        i--;
    }
};