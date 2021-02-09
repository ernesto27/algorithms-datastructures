// Complete the angryProfessor function below.
function angryProfessor(k, a) {
    console.log(k)
    console.log(a)

    let count = 0;
    let response = 'YES';

    a.forEach(item => {
        if(item <= 0) {
            count += 1;
            if(count === k){
                response = 'NO';
                return;
            }
        }   
        console.log(item)
    });

    return response;
}

var k = 3;
var a = [ -1, -3, 0, 4, 2 ];

console.log(angryProfessor(k, a));