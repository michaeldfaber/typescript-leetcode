let map: Map<number, boolean> = new Map();
map[1] = true;
map[2] = true;
let max = 2;

function isPowerOfTwo(n: number): boolean {
    if (n < max) return map[n] === true;
    if (n % 2 === 1) return false;
    
    let current = max;
    while (current < n) {
        current *= 2;
        map[current] = true;
    }
    
    return current == n;
};