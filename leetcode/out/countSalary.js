function average(salary) {
    salary.sort((a, b) => a - b);
    salary.shift();
    salary.pop();
    console.log(salary);
    var sum = salary.reduce((a, b) => {
        return a + b;
    }, 0);
    return sum / salary.length;
}
;
// console.log(average([4000,3000,1000,2000]));
console.log(average([1000, 2000, 3000]));
//# sourceMappingURL=countSalary.js.map