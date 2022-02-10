function longestPalindrome(s: string): string {
    if (s.length === 1) return s;
    
    let longest = "";
    let currentLongest = s[0];
    let left = 0;
    let right = 0;
    
    for (let i = 0; i < s.length - 1; i++) {
        left = i;
        right = i;
        currentLongest = s[i];
        
        while (right < s.length && s[right] === s[right+1]) {
            currentLongest += s[right+1];
            right++;
        }
        
        left--;
        right++;
        
        while (0 <= left && right < s.length) {
            if (s[left] === s[right]) {
                currentLongest = s[left] + currentLongest + s[right];
                left--;
                right++;
            } else break;
        }
        
        if (longest.length < currentLongest.length) longest = currentLongest;
    }
    
    return longest;
};