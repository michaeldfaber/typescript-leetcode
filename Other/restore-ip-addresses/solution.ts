function restoreIpAddresses(s: string): string[] {
    if (s.length < 4 || s.length > 12) return [];
    
    let result: string[] = [];
    
    for (let a = 1; a <= 3; a++)
    for (let b = 1; b <= 3; b++)
    for (let c = 1; c <= 3; c++)
    for (let d = 1; d <= 3; d++) {
        if (a + b + c + d == s.length) {
            let A: number = +s.substr(0, a);
            let B: number = +s.substr(a, b);
            let C: number = +s.substr(a+b, c);
            let D: number = +s.substr(a+b+c, d);
                
            if (A <= 255 && B <= 255 && C <= 255 && D <= 255) {
                let ip = A.toString() + "." + B.toString() + "." + C.toString() + "." + D.toString();
                if (ip.length == s.length + 3) result.push(ip);
            }
        }
    }
    
    return result;
}