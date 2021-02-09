function decrypt(code, k) {
    var resp = [];
    if (k === 0) {
        code.fill(0);
        return code;
    }
    var isGreather = false;
    if (k > 0)
        isGreather = true;
    code.forEach(function (item, index) {
        if (isGreather) {
            var count = 0;
            var sum = 0;
            var currentIndex = index + 1;
            while (count < k) {
                if (code[currentIndex] === undefined) {
                    currentIndex = 0;
                }
                sum += code[currentIndex];
                currentIndex += 1;
                count += 1;
            }
            resp.push(sum);
        }
        else {
            var count = 0;
            var sum = 0;
            var currentIndex = index - 1;
            while (count < Math.abs(k)) {
                if (code[currentIndex] === undefined) {
                    currentIndex = code.length - 1;
                }
                sum += code[currentIndex];
                currentIndex -= 1;
                count += 1;
            }
            resp.push(sum);
        }
    });
    return resp;
}
;
// console.log(decrypt([5,7,1,4], 3));
console.log(decrypt([2, 4, 9, 3], 0));
