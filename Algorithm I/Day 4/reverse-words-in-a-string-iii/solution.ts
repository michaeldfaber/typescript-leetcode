// O(n)
function reverseWords(s: string): string {
    let strings = s.split(" ");
    let result: string[] = [];
    
    for (let i = 0; i < strings.length; i++) {
        result[i] = strings[i].split("").reverse().join("");
    }
    
    return result.join(" ");
};

// Attempting to not use built in methods
function reverseWords2(s: string): string {
    let strings = s.split(" ");
    let chars: string[] = [];
    
    for (let i = 0; i < strings.length; i++) {
        let left = 0;
        let right = strings[i].length-1;
        let temp = "";
        chars = strings[i].split("");
        
        for (let j = 0; j < Math.floor((chars.length-1)/2); i++) {
            temp = chars[left];
            chars[left] = chars[right];
            chars[right] = temp;
            left++;
            right--;
        }
        
        strings[i] = chars.join("");
    }
    
    return strings.join(" ");
};