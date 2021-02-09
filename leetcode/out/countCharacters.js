function countCharacters(words, chars) {
    let count = 0;
    words.forEach((word) => {
        let toCheck = chars.split('');
        let found = true;
        for (let i = 0; i < word.length; i++) {
            let index = toCheck.indexOf(word[i]);
            if (index !== -1) {
                toCheck.splice(index, 1);
            }
            else {
                found = false;
                break;
            }
        }
        if (found === true) {
            count += word.length;
        }
    });
    return count;
}
;
countCharacters(["cat", "bt", "hat", "tree"], 'atach');
//# sourceMappingURL=countCharacters.js.map