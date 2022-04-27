class MinStack {
    stack: number[];

    constructor() {
        this.stack = [];
    }

    push(val: number): void {
        this.stack = [val, ...this.stack];
    }

    pop(): void {
        this.stack = this.stack.slice(1);
    }

    top(): number {
        return this.stack[0];
    }

    getMin(): number {
        let min: number = this.stack[0];
        for (let i = 1; i < this.stack.length; i++) {
            if (this.stack[i] < min) min = this.stack[i];
        }
        return min;
    }
}