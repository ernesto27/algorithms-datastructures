function commonChars(A: string[]): string[] {
    let newArr = [];
    let resp = [];

    for (let i:number = 0; i < A.length; i++) {
        newArr.push(A[i].split(''));
    }

    for ( let i:number = 0; i < newArr[0].length; i++ ) {
        let strToCheck = A[0][i];
        let count = 1;

        for ( let x:number = 1; x < newArr.length; x++) {
            for ( let z:number = 0; z < newArr[x].length; z++) {
                if ( strToCheck === newArr[x][z]) {
                    count += 1;
                    newArr[x].splice(z, 1);
                    break;
                }
            }
        }

        if (count === A.length) {
            resp.push(strToCheck);
        }
    }
    
    return resp;
};

// console.log(commonChars(["bella","label","roller"]))
console.log(commonChars(["cool","lock","cook"]))

