function totalMoney(n: number): number {
    let sum:number = 0;
    let mondayMoney:number = 1;
    let weekDay = 0;
    for (let x:number = 1; x <= n; x++) {
        sum += mondayMoney + weekDay;
        weekDay += 1;
        if (weekDay === 7) {
            weekDay = 0;
            mondayMoney += 1;
        }
    }
    return sum;
};

console.log(totalMoney(10));