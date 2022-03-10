function finalValueAfterOperations(operations: string[]): number {
    let num: number = 0;
    
    for (let i = 0; i < operations.length; i++) {
        if (operations[i][1] == "+") {
            num++;
        } else {
            num--;
        }
    }
    
    return num;
}