function groupAnagrams(strs: string[]): string[][] {
    let map: Map<string, number> = new Map();
    let result: string[][] = [];
    let index = 0;
    
    for (let i = 0; i < strs.length; i++) {
        let sorted = strs[i].split("").sort().join("");
        
        if (map[sorted] !== undefined) {
            result[map[sorted]].push(strs[i]);
        } else {
            result.push([strs[i]]);
            map[sorted] = index;
            index++;
        }
    }
    
    return result;
};

function groupAnagrams2(strs: string[]): string[][] {
    if (strs.length === 1) return [[strs[0]]];
    
    let results: string[][] = [];
    let remaining: string[] = [];
    let sortedRemaining: string[] = [];
    
    let sortedStrs: string[] = [];
    for (let i = 0; i < strs.length; i++) {
        sortedStrs[i] = strs[i].split("").sort().join("");
    }
    
    while (strs.length !== 0) {
        let result: string[] = [strs[0]];
        
        for (let i = 1; i < strs.length; i++) {
            if (sortedStrs[0] === sortedStrs[i]) {
                result.push(strs[i]);
            } else {
                remaining.push(strs[i]);
                sortedRemaining.push(sortedStrs[i]);
            }
        }
        
        results.push(result);
        
        strs = remaining;
        remaining = [];
        
        sortedStrs = sortedRemaining;
        sortedRemaining = [];
        
    }
    
    return results;
};

function groupAnagrams3(strs: string[]): string[][] {
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