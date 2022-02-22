function findTheDifference(s: string, t: string): string {
    let map: Map<string, number> = new Map();
    
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = (map[s[i]] ?? 0) + 1;
    }
    
    for (let i = 0; i < t.length; i++) {
        if (map[t[i]] === undefined) return t[i];
        if (map[t[i]] === 1) map[t[i]] = undefined;
        else map[t[i]] = map[t[i]] - 1;
    }
}