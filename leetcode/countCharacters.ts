function countCharacters(words: string[], chars: string): number {
    let count:number = 0;
    words.forEach((word) => {
        let toCheck: string[] = chars.split('');
        let found:boolean = true;
        for (let i:number = 0; i < word.length; i++) {
            let index = toCheck.indexOf(word[i]);
            if (index !== -1) {
                toCheck.splice(index, 1);
            } else {
                found = false;
                break;
            }
        }
        if (found === true) {
            count += word.length;
        }
    });
    return count;

};

countCharacters(["cat","bt","hat","tree"], 'atach');