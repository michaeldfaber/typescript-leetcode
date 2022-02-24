function minimumTotal(triangle: number[][]): number {
    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            triangle[i][j] += min(triangle[i+1][j], triangle[i+1][j+1]);
        }
    }
    
    return triangle[0][0];
}

function min(a: number, b: number): number {
    return a < b ? a : b;
}