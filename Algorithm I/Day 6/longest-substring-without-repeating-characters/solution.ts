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