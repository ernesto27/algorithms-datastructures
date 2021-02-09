function totalMoney(n) {
    let sum = 0;
    let mondayMoney = 1;
    let weekDay = 0;
    for (let x = 1; x <= n; x++) {
        sum += mondayMoney + weekDay;
        weekDay += 1;
        if (weekDay === 7) {
            weekDay = 0;
            mondayMoney += 1;
        }
    }
    return sum;
}
;
console.log(totalMoney(10));
//# sourceMappingURL=totalMoney.js.map