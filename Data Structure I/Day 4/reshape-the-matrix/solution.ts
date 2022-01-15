function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    let m = mat.length;
    let n = mat[0].length;
    if (m * n !== r * c) {
        return mat;
    }
    
    let x = 0;
    let y = 0;
    let result: number[][] = [];
    
    for (let i = 0; i < r; i++) {
        result.push([]);
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            result[x][y] = mat[i][j];
            y++;
            
            if (y%c === 0) {
                y = 0;
                x++;
            }
        }
    }
    
    return result;
};