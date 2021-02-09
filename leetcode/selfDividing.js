function selfDividingNumbers(left, right) {
    //let arr = Array.from(String(num), Number);
    var resp = [];
    for (var i = left; i <= right; i++) {
        var arr = Array.from(String(i), Number);
        // console.log(arr)
        var notValid = false;
        for (var x = 0; x < arr.length; x++) {
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
