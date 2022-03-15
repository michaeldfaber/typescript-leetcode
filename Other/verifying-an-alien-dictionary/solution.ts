function isAlienSorted(words: string[], order: string): boolean {
    let map: Map<string, number> = new Map();
    map[""] = 0;
    for (let i = 0; i < order.length; i++) {
        map[order[i]] = i+1;
    }
    
    for (let i = 1; i < words.length; i++) {
        if (map[words[i][0]] < map[words[i-1][0]]) return false;
        
        if (words[i][0] === words[i-1][0]) {
            if (words[i].length < words[i-1].length) {
                if (words[i-1].substring(0, words[i].length) === words[i]) return false;
                for (let j = 1; j < words[i].length; j++) {
                    if (map[words[i][j]] > map[words[i-1][j]]) break;
                    if (map[words[i][j]] < map[words[i-1][j]]) return false;
                }
            } else {
                for (let j = 1; j < words[i-1].length; j++) {
                    if (map[words[i][j]] < map[words[i-1][j]]) return false;
                }
            }
        }
    }
    
    return true;
};