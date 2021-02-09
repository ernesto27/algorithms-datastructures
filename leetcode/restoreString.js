function restoreString(s, indices) {
    var resp = '';
    for (var i = 0; i < indices.length; i++) {
        var idx = indices.indexOf(i);
        resp += s[idx];
    }
    return resp;
}
;
console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
