function findWords(words) {
    var firstMap = {
        'q': true,
        'w': true,
        'e': true,
        'r': true,
        't': true,
        'y': true,
        'u': true,
        'i': true,
        'o': true,
        'p': true
    };
    var secondMap = {
        'a': true,
        's': true,
        'd': true,
        'f': true,
        'g': true,
        'h': true,
        'j': true,
        'k': true,
        'l': true
    };
    var thirdMap = {
        'z': true,
        'x': true,
        'c': true,
        'v': true,
        'b': true,
        'n': true,
        'm': true
    };
    var resp = [];
    for (var i = 0; i < words.length; i++) {
        var word = words[i].toLowerCase();
        var currentArray = word.split('');
        // console.log(currentArray) 
        var checkFirst = currentArray.every(function (item) {
            return firstMap[item] !== undefined;
        });
        if (checkFirst === true) {
            resp.push(words[i]);
            continue;
        }
        var checkSecond = currentArray.every(function (item) {
            return secondMap[item] !== undefined;
        });
        if (checkSecond === true) {
            resp.push(words[i]);
            continue;
        }
        var checkThird = currentArray.every(function (item) {
            return thirdMap[item] !== undefined;
        });
        if (checkThird === true) {
            resp.push(words[i]);
            continue;
        }
    }
    console.log(resp);
    return resp;
}
;
findWords(["Hello", "Alaska", "Dad", "Peace"]);
//findWords(["Alasdka"]);
