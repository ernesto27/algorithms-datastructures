function restoreString(s: string, indices: number[]): string {
    let resp:string = '';

    
    for (let i:number = 0; i < indices.length; i++) {
        const idx:number = indices.indexOf(i);
        resp += s[idx];
    }


    return resp;

};


console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3]));