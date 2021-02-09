function removeDuplicatesString(S) {
    let arr = S.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            arr.splice(i, 1);
            arr.splice(i, 1);
            i -= 2;
            if (i < 0)
                i = -1;
        }
    }
    return arr.join('');
}
;
console.log(removeDuplicatesString("abbaca"));
//console.log(removeDuplicatesString("aaaaaaaa"));
//# sourceMappingURL=removeDuplicates.js.map