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

// time limit exceeded here, but it is a valid solution
function checkInclusion2(s1: string, s2: string): boolean {
    for (let i = 0; i < s2.length; i++) {
        let end = i + s1.length;
        let s = s2.substring(i, end);
        if (s.split("").sort().join("") === s1.split("").sort().join("")) {
            return true;
        }
    }
    
    return false;
};