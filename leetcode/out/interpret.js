function interpret(command) {
    let resp;
    resp = command.replace(/\(\)/g, 'o');
    resp = resp.replace(/\(al\)/g, 'al');
    return resp;
}
;
console.log(interpret("G()(al)"));
//# sourceMappingURL=interpret.js.map