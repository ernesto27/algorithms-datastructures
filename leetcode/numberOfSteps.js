function numberOfSteps(num) {
    var resp = 0;
    while (num > 0) {
        if (num % 2 === 0) {
            num = num / 2;
        }
        else {
            num -= 1;
        }
        resp += 1;
    }
    return resp;
}
;
console.log(numberOfSteps(14));
