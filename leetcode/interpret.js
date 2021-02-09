function interpret(command) {
    var resp;
    var map = {
        'G': 'G',
        '()': 'o',
        '(al)': 'al'
    };
    // for (let i:number = 0; i < command.length; i++) {
    //     // resp += map[command[i]];
    //     console.log(command[i])
    //     console.log(map[command[i]])
    // }
    resp = command.replace(/\(\)/g, 'o');
    resp = resp.replace(/\(al\)/g, 'al');
    return resp;
}
;
console.log(interpret("G()(al)"));
