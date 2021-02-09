function firstUniqChar(s) {
    var obj = {};
    for (var x = 0; x < s.length; x++) {
        if (obj[s[x]]) {
            obj[s[x]] = {
                index: x,
                value: obj[s[x]].value + 1
            };
        }
        else {
            obj[s[x]] = {
                index: x,
                value: 1
            };
        }
    }
    for (var prop in obj) {
        if (obj[prop].value === 1) {
            return obj[prop].index;
        }
    }
    return -1;
}
;
console.log(firstUniqChar("loveleetcode"));
