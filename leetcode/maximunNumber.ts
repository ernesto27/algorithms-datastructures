function maximum69Number (num: number): number {
    let numberArray: string[] = String(num).split('');

    for ( let x: number = 0; x < numberArray.length; x++ ) {
        if ( numberArray[x] === '6') {
            numberArray[x] = '9';
            break;
        }
    }

    return Number(numberArray.join(''))
};

console.log(maximum69Number(9669))