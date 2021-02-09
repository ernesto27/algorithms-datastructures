function twoSum(array, target) {
    var left = 0;
    var rigth = array.length - 1;
    response = [];

    while(left < rigth) {
        var sum = array[left] + array[rigth]; 
        if(target === sum) {
            response.push(left + 1);
            response.push(rigth + 1);
            break;
        } else if (target > sum) {
            ++left;
        } else {
            --rigth;
        }
    }
    return response;
}


console.log(twoSum([2,7,11,15], 9))
