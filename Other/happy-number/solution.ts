function isHappy(n: number): boolean {
    if (n === 1) return true;
    let map = new Map<number, boolean>();

    while (true) {
        let ph = squareDigits(n);
        if (ph === 1) return true;
        if (map[ph]) return false;
        map[ph] = true;
        n = ph;
    }
};

function squareDigits(n: number): number {
    let result = 0;
    
    while (n >= 10) {
        let a = n % 10;
        result += a * a;
        n = (n - a) / 10;
    }
    
    result += n * n;
    return result;
}