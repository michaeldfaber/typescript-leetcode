function searchMatrix(matrix: number[][], target: number): boolean {
    let m = matrix.length-1;
    let n = matrix[0].length-1;
    
    // linear search for row
    let row = -1;
    for (let i = 0; i <= m; i++) {
        if (matrix[i][0] <= target) {
            row = i;
        } else {
            break;
        }
    }
    
    if (row === -1) {
        return false;
    }
    
    // binary search within row
    let low = 0;
    let high = n;
    let mid = Math.ceil((low + high)/2);
    
    if (matrix[row][low] === target || matrix[row][high] === target) {
        return true;
    }
    
    while (mid < high) {
        if (matrix[row][mid] === target) {
            return true;
        }
        
        if (matrix[row][mid] <= target) {
            low = mid;
        } else {
            high = mid;
        }
        
        mid = Math.ceil((low + high)/2);
    }
    
    return false;
};