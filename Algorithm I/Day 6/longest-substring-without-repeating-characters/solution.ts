function lengthOfLongestSubstring(s: string): number {
    if (s.length === 1) {
        return 1;
    }
    
    let longestSubstring = "";
    let currentLongestSubstring = "";
    let map: Map<string, Number> = new Map(); // character, index
    
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] !== undefined) {
            i = map[s[i]];
            currentLongestSubstring = "";
            map = new Map();
        } else {
            map[s[i]] = i;
            currentLongestSubstring += s[i];
            if (longestSubstring.length < currentLongestSubstring.length) {
                longestSubstring = currentLongestSubstring;
            }
        }
    }

    return longestSubstring.length;
};

// experimenting with a faster solution. this doesn't work atm
function lengthOfLongestSubstring2(s: string): number {
    if (s.length === 1) {
        return 1;
    }
    
    let longest = "";
    let current = "";
    let map: Map<string, Number> = new Map();
    
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] !== undefined) {
            current = current.substring(1);
            if (s[i] === s[i-1]) {
                current = "";
                map = new Map();
            }
        } 
        map[s[i]] = i;
        current += s[i];
        if (longest.length < current.length) {
            longest = current;
        }
    }

    return longest.length;
};