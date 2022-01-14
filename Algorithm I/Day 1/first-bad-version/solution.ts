/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let low = 0;
        let high = n;
        let mid = Math.ceil(high/2);
        
        while (low < high-1) {
            if (isBadVersion(mid)) {
                high = mid;
            } else {
                low = mid;
            }
            mid = Math.ceil((low+high)/2);
        }
        
        return high;
    };
};