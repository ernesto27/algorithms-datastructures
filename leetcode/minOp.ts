function minOperations(logs: string[]): number {

    let resp:number = 0;

    logs.forEach((item) => {
        if (item.match(/[a-z0-9]+\//)) {
            resp += 1;
        } else if(item === '../' && resp !== 0) {
            resp -= 1;
        }
    });

    return resp;
};

minOperations(["d1/","d2/","../","d21/","./"])