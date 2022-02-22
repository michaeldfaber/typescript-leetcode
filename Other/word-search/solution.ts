function exist(board: string[][], word: string): boolean {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0]) {
                if (existHelper(board, i, j, word, 0) === true) return true;
            }
        }
    }
    
    return false;
}

function existHelper(board: string[][], m: number, n: number, word: string, i: number) {
    if (m < 0 || m >= board.length) return false;
    if (n < 0 || n >= board[0].length) return false;
    
    if (board[m][n] !== word[i]) return false;
    if (i === word.length - 1) return true;
    
    let temp = board[m][n];
    board[m][n] = "";
    
    let exists = existHelper(board, m+1, n, word, i+1) // right
        || existHelper(board, m, n+1, word, i+1) // down
        || existHelper(board, m-1, n, word, i+1) // left
        || existHelper(board, m, n-1, word, i+1); // up
    
    board[m][n] = temp;
    return exists;
}