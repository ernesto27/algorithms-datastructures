function restoreString(s, indices) {
    let resp = '';
    for (let i = 0; i < indices.length; i++) {
        const idx = indices.indexOf(i);
        resp += s[idx];
    }
    return resp;
}
;
console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
//# sourceMappingURL=restoreString.js.map