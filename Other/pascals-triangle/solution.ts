function generate(numRows: number): number[][] {
    if (numRows === 0) {
        return [];
    }
    if (numRows === 1) {
        return [[1]];
    }
    
    let triangle: number[][] = [[1], [1,1]];
    for (let i = 2; i < numRows; i++) {
        let triangleRow: number[] = []
        triangleRow[0] = 1;
        for (let j = 1; j < i; j++) {
            triangleRow[j] = triangle[i-1][j-1] + triangle[i-1][j];
        }
        triangleRow[i] = 1;
        triangle.push(triangleRow);
    }
    
    return triangle;
};