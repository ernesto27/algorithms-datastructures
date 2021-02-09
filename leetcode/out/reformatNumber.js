function reformatNumber(number) {
    number = number.replace(/[\s|-]/g, '');
    let numberArr = number.split('');
    let resp = '';
    while (numberArr.length > 0) {
        if (numberArr.length === 4) {
            resp += numberArr.splice(0, 2).join('');
            resp += '-';
            resp += numberArr.splice(0, 2).join('');
        }
        else if (numberArr.length >= 3) {
            resp += numberArr.splice(0, 3).join('');
        }
        else if (numberArr.length === 2) {
            resp += numberArr.splice(0, 2).join('');
        }
        if (numberArr.length > 0)
            resp += '-';
    }
    return resp;
}
;
// console.log(reformatNumber("1-23-45 6"))
// console.log(reformatNumber("123 4-567"))
console.log(reformatNumber("123 4-5678"));
//# sourceMappingURL=reformatNumber.js.map