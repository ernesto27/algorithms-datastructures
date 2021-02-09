function findOcurrences(text, first, second) {
    var resp = [];
    var textArr = text.split(' ');
    for (var i = 0; i < textArr.length; i++) {
        if (textArr[i] === first && textArr[i + 1] === second && textArr[i + 2] !== undefined) {
            resp.push(textArr[i + 2]);
        }
        else {
            continue;
        }
    }
    console.log(resp);
    return resp;
}
;
findOcurrences("ypkk lnlqhmaohv lnlqhmaohv lnlqhmaohv ypkk ypkk ypkk ypkk ypkk ypkk lnlqhmaohv lnlqhmaohv lnlqhmaohv lnlqhmaohv ypkk ypkk ypkk lnlqhmaohv lnlqhmaohv ypkk", "lnlqhmaohv", "ypkk");
