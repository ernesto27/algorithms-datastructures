function maximum69Number(num) {
    var numberArray = String(num).split('');
    for (var x = 0; x < numberArray.length; x++) {
        if (numberArray[x] === '6') {
            numberArray[x] = '9';
            break;
        }
    }
    return Number(numberArray.join(''));
}
;
console.log(maximum69Number(9669));
