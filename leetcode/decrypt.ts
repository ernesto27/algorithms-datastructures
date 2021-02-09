interface Array<T> {
    fill(value: T): Array<T>;
}


function decrypt(code: number[], k: number): number[] {
    const resp:number[] = [];

    if (k === 0) {
        code.fill(0);
        return code;
    }

    let isGreather = false;
    if (k > 0) isGreather = true;

    code.forEach((item, index) => {
        if (isGreather) {
            let count:number = 0;
            let sum:number = 0;
            let currentIndex = index + 1;

            while (count < k) {

                if (code[currentIndex] === undefined) {
                    currentIndex = 0;
                }
                sum += code[currentIndex];
                currentIndex += 1;
                count += 1;
            }
            resp.push(sum);
        } else  {
            let count:number = 0;
            let sum:number = 0;
            
            let currentIndex = index - 1;
        
            while (count < Math.abs(k)) {
                
                if (code[currentIndex] === undefined) {
                    currentIndex = code.length - 1;
                }
                sum += code[currentIndex];
                currentIndex -= 1;
                count += 1;
            }
            resp.push(sum);
        }
    });

    return resp;

};

// console.log(decrypt([5,7,1,4], 3));
console.log(decrypt([2,4,9,3], 0));