function decrypt(code: number[], k: number): number[] {
    // -(n - 1) <= k <= n - 1
    let codeCopy = [...code, ...code];
    
    for (let i = 0; i < code.length; i++) {
        code[i] = 0;
        if (k < 0) {
            for (let j = -1; j >= k; j--) {
                code[i] += codeCopy[code.length + i + j];
            }
        } else {
            for (let j = 1; j <= k; j++) {
                code[i] += codeCopy[i + j];
            }
        }
    }
    
    return code;
};