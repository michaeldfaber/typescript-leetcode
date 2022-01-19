function checkInclusion(s1: string, s2: string): boolean {
    let map: Map<string, number> = new Map();
    for (let i = 0; i < s1.length; i++) {
        if (map[s1[i]] === undefined) {
            map[s1[i]] = 1;
        } else {
            map[s1[i]]++;
        }
    }
    
    let start = 0;
    let end = s1.length-1;
    let mapCopy = { ...map };
    
    while (end < s2.length) { 
        for (let i = start; i <= end; i++) {
            if (mapCopy[s2[i]] > 0) {
                if (i === end) {
                    return true;
                }
                
                mapCopy[s2[i]]--;
                continue;
            } else {
                start++;
                end++;
                mapCopy = { ...map };
                break;
            }
        }
    }
    
    return false;
};