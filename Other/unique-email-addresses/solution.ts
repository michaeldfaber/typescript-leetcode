function numUniqueEmails(emails: string[]): number {
    let map: Map<string, boolean> = new Map();
    let count = 0;
    
    for (let i = 0; i < emails.length; i++) {
        let email = sanitize(emails[i]);
        if (map[email] === true) continue;
        map[email] = true;
        count++;
    }
    
    return count;
};

function sanitize(email: string) {
    let e = email.split("@");
    var regex = /\./gi;
    e[0] = e[0].replace(regex, "");
    e[0] = e[0].split("+")[0];
    return e.join("@");
}