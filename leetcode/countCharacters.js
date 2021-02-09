function countCharacters(words, chars) {
    var resp = [];
    var count = 0;
    words.forEach(function (word) {
        var toCheck = chars.split('');
        var found = true;
        for (var i = 0; i < word.length; i++) {
            var index = toCheck.indexOf(word[i]);
            if (index !== -1) {
                toCheck.splice(index, 1);
            }
            else {
                found = false;
                break;
            }
        }
        if (found === true) {
            resp.push(word);
            count += word.length;
        }
    });
    console.log(count);
    return count;
}
;
countCharacters(["cat", "bt", "hat", "tree"], 'atach');
