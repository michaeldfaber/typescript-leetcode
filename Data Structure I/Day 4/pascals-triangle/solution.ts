function generate(numRows: number): number[][] {
    if (numRows === 0) {
        return [];
    }
    
    let triangle: number[][] = [[1]];
    if (numRows === 1) {
        return triangle;
    }
    
    for (let i = 1; i < numRows; i++) {
        triangle[i] = [];
        triangle[i][0] = 1;
        for (let j = 1; j < i; j++) {
            triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j];
        }
        triangle[i][i] = 1;
    }
    
    return triangle;
};