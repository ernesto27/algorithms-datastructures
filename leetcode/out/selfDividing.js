function selfDividingNumbers(left, right) {
    //let arr = Array.from(String(num), Number);
    let resp = [];
    for (let i = left; i <= right; i++) {
        let arr = Array.from(String(i), Number);
        // console.log(arr)
        let notValid = false;
        for (let x = 0; x < arr.length; x++) {
            if (arr[x] === 0 || i % arr[x] !== 0) {
                notValid = true;
                break;
            }
            console.log(i + "%" + arr[x]);
            console.log(i % arr[x]);
        }
        if (notValid !== true) {
            resp.push(i);
        }
    }
    return resp;
}
;
console.log(selfDividingNumbers(1, 22));
//# sourceMappingURL=selfDividing.js.map