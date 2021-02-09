function stringMatching(words) {
    var resp = [];
    for (var i = 0; i < words.length; i++) {
        for (var x = 0; x < words.length; x++) {
            if (i === x)
                continue;
            if (words[x].indexOf(words[i]) !== -1) {
                resp.push(words[i]);
                break;
            }
        }
    }
    console.log(resp);
    return resp;
}
;
stringMatching(["mass", "as", "hero", "superhero"]);
