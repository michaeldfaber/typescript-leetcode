function canConstruct(ransomNote: string, magazine: string): boolean {
    let map: Map<string, number> = new Map();
    for (let i = 0; i < magazine.length; i++) {
        if (map[magazine[i]] === undefined) {
            map[magazine[i]] = 1;
        } else {
            map[magazine[i]]++;
        }
    }
    
    for (let i = 0; i < ransomNote.length; i++) {
        if (map[ransomNote[i]] === undefined) {
            return false;
        } else {
            if (map[ransomNote[i]] === 0) {
                return false
            } else {
                map[ransomNote[i]]--;
            }
        }
    }
    
    return true;
};