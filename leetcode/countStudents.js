// function countStudents(students: number[], sandwiches: number[]): number {
//     let students0:number = 0;
//     let students1:number = 0;
//     let sandwichs0:number = 0;
//     let sandwichs1:number = 0;
//     let resp:number = 0;
//     students.forEach((item) => {
//         if (item === 0) {
//             students0 += 1;
//         } else if (item === 1) {
//             students1 += 1;
//         }
//     });
//     sandwiches.forEach((item) => {
//         if (item === 0) {
//             sandwichs0 += 1;
//         } else if (item === 1) {
//             sandwichs1 += 1;
//         }
//     });
//     resp += students0 - students1;
//     resp += sandwichs0 - sandwichs1;
//     return Math.abs(resp);
// };
function countStudents(students, sandwiches) {
    while (students.length > 0 && students.indexOf(sandwiches[0]) != -1) {
        if (students[0] == sandwiches[0]) {
            students.shift();
            sandwiches.shift();
        }
        else
            students.push(students.shift());
    }
    return students.length;
}
;
console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1]));
//console.log(countStudents([1,1,1,0,0,1], [1,0,0,0,1,1]));
