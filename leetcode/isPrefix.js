// interface String {    
//     endsWith(searchString: string, endPosition?: number): boolean;
// };
function isPrefixOfWord(sentence, searchWord) {
    const sentenceArray = sentence.split(' ');
    console.log(sentenceArray);
    let resp = -1;
    for (let i = 0; i < sentenceArray.length; i++) {
        console.log(sentenceArray[i].startsWith(searchWord));
        if (sentenceArray[i].startsWith(searchWord) === true) {
            resp = i + 1;
            break;
        }
    }
    console.log(resp);
    return resp;
}
;
isPrefixOfWord("i love eating burger", "burg");
