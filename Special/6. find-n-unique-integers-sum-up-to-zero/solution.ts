function sumZero(n: number): number[] {
    let result: number[] = [];
    
    if (n % 2 === 1) {
        result.push(0);
        n--;
    }
    
    for (let i = 1; i <= (n/2); i++) {
        result.push(i);
        result.push(i * -1);
    }
    
    return result;
};