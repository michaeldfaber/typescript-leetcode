function getRow(rowIndex: number): number[] {
    if (rowIndex === 0) return [1];
    let row = [1,1];
    if (rowIndex === 1) return row;
    
    for (let i = 2; i <= rowIndex; i++) {
        let newRow = [1];
        for (let j = 1; j < row.length; j++) {
            newRow.push(row[j-1] + row[j]);
        }
        newRow.push(1);
        row = newRow;
    }
    
    return row;
};