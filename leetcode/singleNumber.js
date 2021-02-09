function singleNumber(nums) {
    var objTemp = {};
    nums.forEach(function (item) {
        if (objTemp[item]) {
            objTemp[item] = objTemp[item] + 1;
        }
        else {
            objTemp[item] = 1;
        }
    });
    var response = 0;
    for (var prop in objTemp) {
        if (objTemp[prop] === 1) {
            response = objTemp[prop];
            break;
        }
    }
    console.log(response);
    return response;
}
;
singleNumber([4, 1, 2, 1, 2]);
