function setZeroes(matrix: number[][]): void {
    let rowMap: Map<number, true> = new Map();
    let columnMap: Map<number, true> = new Map();

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                rowMap[i] = true;
                columnMap[j] = true;
            }
        }
    }
    
    let zeroRow: number[] = [];
    for (let i = 0; i < matrix[0].length; i++) {
        zeroRow.push(0);
    }

    for (let i = 0; i < matrix.length; i++) {
        if (rowMap[i] === true) {
            matrix[i] = zeroRow;
            continue;
        }
        
        for (let j = 0; j < matrix[0].length; j++) {
            if (columnMap[j] === true) {
                matrix[i][j] = 0;
            }
        }
    }
};