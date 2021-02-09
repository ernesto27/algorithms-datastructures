function countConsistentStrings(allowed, words) {
    // let resp:number = 0;
    // let sortString = sortRemoveRepeat(allowed);
    // console.log(sortString);
    // words.forEach((item, index) => {
    //     let newStr = sortRemoveRepeat(item);
    //     if (sortString.indexOf(newStr) !== -1) {
    //         resp += 1;
    //     }
    // });
    // return resp;
    var resp = 0;
    words.forEach(function (item, index) {
        var notFound = false;
        for (var i = 0; i < item.length; i++) {
            console.log(item[i]);
            if (allowed.indexOf(item[i]) === -1) {
                notFound = true;
                break;
            }
        }
        console.log('--------------');
        if (notFound === false) {
            resp += 1;
        }
    });
    return resp;
}
;
function sortRemoveRepeat(value) {
    var sortString = value.split('').sort().join('');
    sortString = sortString.split('')
        .filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
    })
        .join('');
    return sortString;
}
// console.log(countConsistentStrings("baa", ["ad","bd","aaab","baa","badab"]));
console.log(countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"]));
