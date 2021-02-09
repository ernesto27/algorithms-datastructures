function xorOperation(n: number, start: number): number {
    
    let operation:string;
    const nums:number[] = [];

    for ( let i:number = 0; i < n; i++ ) {
        nums.push(start);
        start += 2;
    }

    operation = nums.join('^');
    return eval(operation);
};

console.log(xorOperation(5, 0));