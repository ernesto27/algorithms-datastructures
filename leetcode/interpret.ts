function interpret(command: string): string {

    let resp:string;

    resp = command.replace(/\(\)/g, 'o');
    resp = resp.replace(/\(al\)/g, 'al');

    return resp;


};

console.log(interpret("G()(al)"));