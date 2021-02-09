// Complete the activityNotifications function below.
// function activityNotifications(expenditure, d) {
//     let countNotifications = 0;

//     for( var x = 0; x < expenditure.length; x++ ) {
//         const medianArray = expenditure.slice(x, d + x);
//         const transactionToCheck = expenditure[d + x];
//         if(medianArray.length === d && transactionToCheck !== undefined) {
//             const medianValue = median(medianArray);
//             if(transactionToCheck >= medianValue * 2) {
//                 countNotifications += 1;
//             }
//         } else {
//             break;
//         }
    
//     }
//     console.log(countNotifications);

// }

// const median = arr => {
//     const mid = Math.floor(arr.length / 2);
//     const nums = [...arr].sort((a, b) => a - b);
//     return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
// };
  

function activityNotifications (expenditure, d) {

    // Number of notifications
    let n = 0

    // Set midpoints for median calculation
    let [ i1, i2 ] = [ Math.floor((d-1)/2), Math.ceil((d-1)/2) ]
    let m1, m2, m

    // Initialize count sorted subarray
    let cs = new Array(201).fill(0)
    for (let i = d-1; i >= 0; i--) cs[expenditure[i]]++

    // Iterate through expenditures
    for (let i = d, l = expenditure.length; i < l; i++) {

        // Find median
        for (let j = 0, k = 0; k <= i1; k += cs[j], j++) m1 = j
        for (let j = 0, k = 0; k <= i2; k += cs[j], j++) m2 = j
        let m = (m1 + m2) / 2

        // Check if notification is given
        if (expenditure[i] >= m * 2) n++

        // Replace subarray elements
        cs[expenditure[i-d]]--
        cs[expenditure[i]]++
    }

    return n
}

var expenditure = [ 2, 3, 4, 2, 3, 6, 8, 4, 5 ];
var d = 5;


activityNotifications(expenditure, d);