function buildArray(target: number[], n: number): string[] {

    let resp: string[] = [];
    let indexArr:number = 0;

    for (let i:number = 1; i <= n; i++) {

        if (resp.length === target.length) break;

        resp.push('Push');
        if (i !== target[indexArr]) {
            resp.push('Pop');
            i--;
        } else {
            indexArr += 1;
        }
    }

    return resp;
};

console.log(buildArray([1,2], 4));