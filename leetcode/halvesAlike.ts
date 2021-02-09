function halvesAreAlike(s: string): boolean {
    let word:string[] = s.toLowerCase().split('');
    let left:string[] = word.slice(0, Math.ceil(word.length / 2));
    let right:string[] = word.slice(Math.ceil(word.length / 2));

    console.log(left)
    console.log(right)

    let countLeft:number = 0;
    let countRigth:number = 0;
    let vowels:string[] = ['a', 'e', 'i', 'o', 'u'];
    left.forEach((item, index) => {
        if(vowels.indexOf(item) !== -1) {
            countLeft += 1;
        }
    });

    right.forEach((item, index) => {
        if(vowels.indexOf(item) !== -1) {
            countRigth += 1;
        }
    });

    return countLeft === countRigth;
};

console.log(halvesAreAlike("book")  );
console.log(halvesAreAlike("MerryChristmas"));