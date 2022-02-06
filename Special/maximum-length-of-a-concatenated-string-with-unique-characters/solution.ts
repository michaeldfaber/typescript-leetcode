function maxLength(arr: string[]): number {
    let max = 0;
    let concats: string[] = [""];
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < concats.length; j++) {
            if (isUnique(arr[i] + concats[j])) {
                concats.push(arr[i] + concats[j]);
                if (max < (arr[i] + concats[j]).length) {
                    max = (arr[i] + concats[j]).length;
                }
            }
        }
    }
    
    return max;
};

function isUnique(s: string): boolean {
    let map: Map<string, number> = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) return false;
        map[s[i]] = true;
    }
    return true;
}