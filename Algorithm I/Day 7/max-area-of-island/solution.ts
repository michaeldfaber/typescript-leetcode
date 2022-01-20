function maxAreaOfIsland(grid: number[][]): number {
    let m = grid.length-1;
    let n = grid[0].length-1;
    let maxArea = 0;
    
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (grid[i][j] === 1) {
                let area = { value: 0 };
                helper(grid, i, j, m, n, area);
                
                if (maxArea < area.value) {
                    maxArea = area.value;
                }
            }
        }
    }
    
    return maxArea;
};

function helper(grid: number[][], i: number, j: number, m: number, n: number, area: any): number {
    if (i < 0 || i > m) {
        return;
    }
    
    if (j < 0 || j > n) {
        return;
    }
    
    if (grid[i][j] === 1) {
        grid[i][j] = 2;
        area.value++;
        helper(grid, i-1, j, m, n, area); // top
        helper(grid, i, j+1, m, n, area); // right
        helper(grid, i+1, j, m, n, area); // bottom
        helper(grid, i, j-1, m, n, area); // left
    }
}