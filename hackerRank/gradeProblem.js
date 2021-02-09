function gradingStudents(grades) {
    // Write your code here

    // Loop over grades
    // for ( var x = 0; x < grades.length; x++ ) {
    //     // If item is less than 40 , not modifiy
    //     const currentItem = grades[x];
    //     if( currentItem > 33) {
    //         const nextMultipleFive = Math.ceil(currentItem / 5) * 5;
    //         if( (nextMultipleFive - currentItem) < 3 ) {
    //             grades[x] = nextMultipleFive;
    //         }
    //     }
    // }

    // console.log(grades);
    // return grades;

    return grades.map((n) => {
        let diff = 5 - (n % 5);
        if(diff < 3 && n >= 38) {
            n += diff;
        }
        
        return n;
    })
}

 const grades = [ 73, 67, 38, 33 ];
// var grades = [86,30,0,16,51,53,42,48,22,69,12,27,34,24,95,16,32,22,52,56,71,95]
gradingStudents(grades)