function findSubstring(s: string, words: string[]): number[] {
    let wordLength = words[0].length;
    let concatLength = wordLength * words.length;
    let result: number[] = [];
    
    let map: Map<string, number> = new Map();
    for (let i = 0; i < words.length; i++) {
        if (map[words[i]] === undefined) {
            map[words[i]] = 1;
        } else {
            map[words[i]]++;
        }
    }
    
    for (let i = 0; i <= s.length - concatLength; i++) {
        let current = s.substring(i, i + concatLength);
        let index = 0;
        let isConcat = true;
        let currentMap = { ...map };
        while (index < concatLength) {
            let currentSubstring = current.substring(index, index + wordLength);
            if (currentMap[currentSubstring] !== undefined) {
                if (currentMap[currentSubstring] === 1) {
                    currentMap[currentSubstring] = undefined;
                } else {
                    currentMap[currentSubstring]--;
                }
                index = index + wordLength;
            } else {
                isConcat = false;
                break;
            }
        }
        
        if (isConcat) {
            result.push(i);
        }
    }
    
    return result;
};