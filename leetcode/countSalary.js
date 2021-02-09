function average(salary) {
    salary.sort(function (a, b) { return a - b; });
    salary.shift();
    salary.pop();
    console.log(salary);
    var sum = salary.reduce(function (a, b) {
        return a + b;
    }, 0);
    return sum / salary.length;
}
;
// console.log(average([4000,3000,1000,2000]));
console.log(average([1000, 2000, 3000]));
