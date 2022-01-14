// O(n^2)

function twoSum(numbers: number[], target: number): number[] {
    let l = numbers.length - 1;
    if (l === 1) {
        return [1, 2];
    }
    
    for (let i = 0; i <= l; i++) {
        for (let j = 0; j <= l; j++) {
            if (i == j) {
                continue;
            }
            if (numbers[i] + numbers[j] === target) {
                return [i+1, j+1];
            }
        }
    }
    
    return [0, 0];
};

// O(n)

function twoSum2(numbers: number[], target: number): number[] {
    let l = numbers.length - 1;
    if (l === 1) {
        return [1, 2];
    }
    
    let map: Map<number, number> = new Map();
    for (let i = 0; i <= l; i++) {
        if (map[target - numbers[i]] !== undefined) {
            return [map[target - numbers[i]]+1, i+1];
        } else {
            map[numbers[i]] = i;
        }
    }
    
    return [0, 0];
};