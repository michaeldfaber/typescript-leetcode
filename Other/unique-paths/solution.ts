function uniquePaths(m: number, n: number): number {
    m--;
    n--;
    let result = factorial(m + n) / (factorial(m) * factorial(n));
    return result;
}

function factorial(num: number): number {
    let product = 1;
    
    while (num > 0) {
        product *= num;
        num--;
    }
    
    return product;
}