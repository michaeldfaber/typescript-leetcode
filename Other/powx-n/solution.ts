function myPow(x: number, n: number): number {
    if (x === 1 || n === 0) return 1;
    if (x === -1) return n % 2 === 0 ? 1 : -1;
    if (n <= -15) return 0;
    
    let product: number = 1;
    for (let i = 0; i < Math.abs(n); i++) {
        product = product * x;
    }
    
    if (n < 0) product = 1 / product;
    
    return product;
};