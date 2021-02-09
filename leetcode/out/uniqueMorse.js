function uniqueMorseRepresentations(words) {
    const morseCodes = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
    const map = {};
    let resp = 0;
    words.forEach((word, index) => {
        let currentWord = '';
        for (let i = 0; i < word.length; i++) {
            currentWord += morseCodes[word[i].charCodeAt(0) - 97];
        }
        console.log(currentWord);
        console.log('**************');
        if (map[currentWord] === undefined) {
            map[currentWord] = true;
            resp += 1;
        }
        else {
        }
    });
    return resp;
}
;
console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
//# sourceMappingURL=uniqueMorse.js.map