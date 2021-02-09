function stringMatching(words) {
    const resp = [];
    for (let i = 0; i < words.length; i++) {
        for (let x = 0; x < words.length; x++) {
            if (i === x)
                continue;
            if (words[x].indexOf(words[i]) !== -1) {
                resp.push(words[i]);
                break;
            }
        }
    }
    return resp;
}
;
stringMatching(["mass", "as", "hero", "superhero"]);
//# sourceMappingURL=stringMatching.js.map