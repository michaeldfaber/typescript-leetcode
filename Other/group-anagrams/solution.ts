function groupAnagrams(strs: string[]): string[][] {
    if (strs.length === 1) return [[strs[0]]];
    
    let remaining: string[] = [];
    let results: string[][] = [];
    
    while (strs.length !== 0) {
        let result: string[] = [strs[0]];
        let map: Map<string, number> = new Map();
        
        for (let i = 0; i < strs[0].length; i++) {
            map[strs[0][i]] = (map[strs[0][i]] ?? 0) + 1;
        }
        
        for (let i = 1; i < strs.length; i++) {
            if (strs[0].length !== strs[i].length) {
                remaining.push(strs[i]);
                continue;
            }
            
            let mapCopy = {...map};
            let anagram = true;
            for (let j = 0; j < strs[i].length; j++) {
                if (mapCopy[strs[i][j]] === undefined) {
                    anagram = false;
                    break;
                }
                if (mapCopy[strs[i][j]] === 1) {
                    mapCopy[strs[i][j]] = undefined;
                } else {
                    mapCopy[strs[i][j]] = mapCopy[strs[i][j]] - 1;
                }
            }
            
            if (anagram) {
                result.push(strs[i]);
            } else {
                remaining.push(strs[i]);
            }
        }
        
        results.push(result);
        strs = remaining;
        remaining = [];
    }
    
    return results;
};