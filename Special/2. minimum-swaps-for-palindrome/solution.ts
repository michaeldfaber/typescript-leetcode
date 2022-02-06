// this problem is not actually on leetcode
// test here: https://www.typescriptlang.org/play

function makePalindrome(s: string): number {
    if (canBePalindrome(s) === false) return -1;

    // keep track of swap count
    let count = 0;
    
    // two pointers, starting at the beginning and end of the string
    let start = 0;
    let end = s.length - 1;

    while (start < end) {
        // if start equals end continue
        if (s[start] !== s[end]) {
            let c = -1; // desired character index

            // find desired character for end
            for (let i = start + 1; i <= end - 1; i++) {
                if (s[i] === s[start]) {
                    c = i;
                    break;
                }
            }

            if (c === -1) {
                // start is the odd character
                // find desired character for start
                for (let i = start + 1; i <= end - 1; i++) {
                    if (s[i] === s[end]) {
                        c = i;
                        break;
                    }
                }
                
                // swap desired character until it is in the start position
                for (let i = c; i > start; i--) {
                    s = swap(s, i-1, i);
                    count++;
                }

            } else {
                // swap desired character until it is in the end position
                for (let i = c; i < end; i++) {
                    s = swap(s, i, i+1);
                    count++;
                }
            }
        }

        // squeeze pointers
        start++;
        end--;
    }

    return count;
}

function canBePalindrome(s: string): boolean {
    let letters: Map<string, number> = new Map();

    // store frequency of every letter in a map
    for (let i = 0; i < s.length; i++) {
        letters.set(s[i], (letters.get(s[i]) ?? 0) + 1)
    }

    let oddCount = 0;

    let freq = [...letters.values()];
    for (let i = 0; i < freq.length; i++) {
        // if there is an even number of a letter continue, if not, increment odd count
        if (freq[i] % 2 === 0) continue;
        oddCount++;
    }

    // palindrome allows for one odd frequency if the word has an odd number of letters
    if (oddCount > 1) return false;
    if (oddCount === 1) {
        if (s.length % 2 === 0) return false;
    }

    return true;
}

function swap(s: string, i: number, j: number): string {
    let c = s.split("");
    let temp = c[i];
    c[i] = c[j];
    c[j] = temp;
    return c.join("");
}