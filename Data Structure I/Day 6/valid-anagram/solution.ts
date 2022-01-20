function isAnagram(s: string, t: string): boolean {
    s = s.split("").sort().join("");
    t = t.split("").sort().join("");
    return s === t;
};

// if I didn't have access to a sort here, I'd use a map like the other two solutions for Day 6