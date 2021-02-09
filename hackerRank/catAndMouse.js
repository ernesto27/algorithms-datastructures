// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
    var catADistance = Math.abs(z - x);
    var catBDistance = Math.abs(z- y);
    var response = 'Mouse C';

    if(catADistance < catBDistance) {
        response = 'Cat A';
    } else if (catBDistance < catADistance) {
        response = 'Cat B';
    }

    console.log(response);
    return response;


}

catAndMouse(1, 2, 3);