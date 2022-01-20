function firstUniqChar(s: string): number {
    if (s.length === 1) {
        return 0;
    }
    
    let map: Map<string, number> = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === undefined) {
            map[s[i]] = 1;
        } else {
            map[s[i]]++;
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) {
            return i;
        }
    }
    
    return -1;
};