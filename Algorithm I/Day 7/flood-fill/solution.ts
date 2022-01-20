function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
    let m = image.length-1;
    let n = image[0].length-1;
    let color = image[sr][sc];
    
    if (color === newColor) {
        return image;
    }
    
    floodFillHelper(image, sr, sc, color, newColor, m, n);
    return image;
    
};
    
function floodFillHelper(image: number[][], i: number, j: number, color: number, newColor: number, m: number, n: number) {
    if (i < 0 || i > m) {
        return;
    }
    
    if (j < 0 || j > n) {
        return;
    }
    
    if (image[i][j] === color) {
        image[i][j] = newColor;
        floodFillHelper(image, i, j-1, color, newColor, m, n); // left
        floodFillHelper(image, i-1, j, color, newColor, m, n); // top
        floodFillHelper(image, i, j+1, color, newColor, m, n); // right
        floodFillHelper(image, i+1, j, color, newColor, m, n); // bottom
    }
}