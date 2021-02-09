function totalMoney(n) {
    var sum = 0;
    var mondayMoney = 1;
    var weekDay = 0;
    for (var x = 1; x <= n; x++) {
        // sum += (weekDay === 1 ) ? mondayMoney : mondayMoney + x;
        // let n = (weekDay === 1 ) ? mondayMoney : mondayMoney + x;
        console.log(mondayMoney + weekDay);
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
