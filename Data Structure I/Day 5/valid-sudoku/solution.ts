function isValidSudoku(board: string[][]): boolean {    
    let rowMap: Map<string, boolean> = new Map();
    let columnMap: Map<string, boolean> = new Map();
    
    let leftSquareMap: Map<string, boolean> = new Map();
    let middleSquareMap: Map<string, boolean> = new Map();
    let rightSquareMap: Map<string, boolean> = new Map();
    
    for (let i = 0; i < 9; i++) {
        // reset row and column
        rowMap = new Map();
        columnMap = new Map();
        
        // reset square maps every three rows
        if (i === 3 || i === 6) {
            leftSquareMap = new Map();
            middleSquareMap = new Map();
            rightSquareMap = new Map();
        }

        for (let j = 0; j < 9; j++) {
            // validate board[i] row
            if (existsInMap(rowMap, board[i][j])) {
                return false;
            }
            
            // validate board[i] column
            if (existsInMap(columnMap, board[j][i])) {
                return false;
            }
            
            // validate left square for current set of three rows
            if (j >= 0 && j <= 2) {
                if (existsInMap(leftSquareMap, board[i][j])) {
                    return false;
                }
            }
            
            // validate middle square for current set of three rows
            if (j > 2 && j <= 5) {
                if (existsInMap(middleSquareMap, board[i][j])) {
                    return false;
                }
            }
            
            // validate right square for current set of three rows
            if (j > 5 && j <= 8) {
                if (existsInMap(rightSquareMap, board[i][j])) {
                    return false;
                }
            }
        }
    }
    
    return true;
};

function existsInMap(map: Map<string, boolean>, value: string): boolean {
    if (value === ".") {
        return false;
    }
    
    if (map[value] === true) {
        return true;
    }

    map[value] = true;
    return false;
}