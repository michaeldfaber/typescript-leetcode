// this wasn't accepted with "time limit exceeded"
// i saw others in the discussion posting similar solutions with faster languages like Go, C++, Python, etc.
// i suspect TypeScript

function minPathSum(grid: number[][]): number {
    let min = { val: 201 };
    minPathHelper(grid, 0, 0, 0, min);
    return min.val;
};

function minPathHelper(grid: number[][], i: number, j: number, sum: number, min: any) {
    if (grid[i] === undefined) {
        return;
    }
    
    if (grid[i][j] === undefined) {
        return;
    }
    
    sum += grid[i][j];
    
    if (i === grid.length - 1 && j === grid[0].length - 1) {
        if (min.val > sum) {
            min.val = sum;
        }
        return;
    }
    
    minPathHelper(grid, i+1, j, sum, min);
    minPathHelper(grid, i, j+1, sum, min);
}