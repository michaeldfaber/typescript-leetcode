function minDeletions(s: string): number {
    let letters: Map<string, number> = new Map();
    
    // create a map of every letter and their frequency
    for (let i = 0; i < s.length; i++) {
        letters.get(s[i]) ? letters.set(s[i], letters.get(s[i]) + 1) : letters.set(s[i], 1);
    }
    
    // create an array of the frequencies
    let freq: number[] = [...letters.values()];
    
    // sort descending
    freq.sort((n1, n2) => n2 - n1);
    
    let count = 0;
    for (let i = 1; i < freq.length; i++) {
        // if the current frequency is the greater than the last
        while (freq[i] >= freq[i-1]) {
            // decrement it until it is less than the last or 0
            if (freq[i] === 0) break;
            freq[i]--;
            
            // increment a counter to keep track of number of "number of characters" to delete
            count++;
        }
    }
    
    return count;
};