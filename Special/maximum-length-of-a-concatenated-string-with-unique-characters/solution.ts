function maxLength(arr: string[]): number {
    // keep track of max
    let max = 0;
    
    // keep track of valid concatentations
    let concats: string[] = [""];
    
    // loop through array
    for (let i = 0; i < arr.length; i++) {
        // loop through valid concatentations
        for (let j = 0; j < concats.length; j++) {
            // check if concatentation of element in array and current concat is unique
            // adds arr[i] because concat is initialized with ""
            if (isUnique(arr[i] + concats[j])) {
                concats.push(arr[i] + concats[j]);
                // check if max
                if (max < (arr[i] + concats[j]).length) {
                    max = (arr[i] + concats[j]).length;
                }
            }
        }
    }
    
    return max;
};

function isUnique(s: string): boolean {
    let map: Map<string, number> = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) return false;
        map[s[i]] = true;
    }
    return true;
}