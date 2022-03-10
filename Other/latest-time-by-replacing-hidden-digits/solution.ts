function maximumTime(time: string): string {
    let newTime: string = "";
    
    newTime = time[4] === "?" ? "9" : time[4];
    newTime = time[3] === "?" ? newTime = "5" + newTime : time[3] + newTime;
    newTime = ":" + newTime;
    
    if (time[0] === "?" || time[0] === "2") {
        if (time[1] === "?") {
            newTime = "23" + newTime;
        }
        if ("0123".includes(time[1])) {
            newTime = "2" + time[1] + newTime;
        }
        if ("456789".includes(time[1])) {
            newTime = "1" + time[1] + newTime;
        }
    } else {
        if (time[1] === "?") {
            newTime = time[0] + "9" + newTime;
        } else {
            newTime = time[0] + time[1] + newTime;
        }
    }
    
    return newTime;
};