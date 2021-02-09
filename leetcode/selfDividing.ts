function selfDividingNumbers(left: number, right: number): number[] {

    //let arr = Array.from(String(num), Number);
    let resp:number[] = [];
    for (let i:number = left; i <= right; i++) {
        let arr = Array.from(String(i), Number);
        // console.log(arr)
        let notValid:boolean = false;
        for (let x:number = 0; x < arr.length; x++) {
            if (arr[x] === 0 || i % arr[x] !== 0) {
                notValid = true;
                break;
            }

            console.log(i +"%" +  arr[x])
            console.log(i % arr[x])
        }

        if (notValid !== true) {
            resp.push(i);
        }
    }

    return resp;
};

console.log(selfDividingNumbers(1, 22));