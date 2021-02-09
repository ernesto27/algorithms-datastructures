function longestSubarray(arr) {
    // Write your code here
    // console.log(arr)

    // Loop over array

    // Inner loop ,  check in next is equals or is same as i plus one

    // If next is different than prev statement breaks.

    if(arr.length === 1) return 1;
    var subArray = [];

    const subArrayCount = [];
    for ( var x = 0; x < arr.length; x++ ) {
        let firstValue = arr[x];
        let count = 1; 
        let currentLongest = [];
        currentLongest.push(firstValue);

        
        subArray[x] = [firstValue];
        let secondValue;

        for ( var y = x + 1; y < arr.length; y++ ) {
            //let secondValue = arr[y];
            if( firstValue === arr[y] || 
                firstValue + 1 === arr[y] || 
                firstValue -1 === arr[y]) {
                
                if(subArray[x].length === 1) {
                    secondValue = arr[y];
                    subArray[x].push(arr[y]);
                } else if(arr[y] === secondValue || firstValue === arr[y]){
                    subArray[x].push(arr[y]);
                } else {
                    break;
                }

              
                // count += 1;
                // if(y === arr.length - 1) {
                //     subArrayCount.push(count);
                // }if(y === arr.length - 1) {
                //     subArrayCount.push(count);
                // }
                // subArrayCount.push(count);
                // break;
            } else {
                break;
            }
        }
    }
    // console.log(subArrayCount)
    // var maxArray = Math.max.apply(Math, subArrayCount);
    // console.log(maxArray)

    // console.log(subArray

    for( var x = 0; x < subArray.length; x++ ) {
        console.log(subArray[x].length)
    
    }
    console.log(subArray)

}

//var arr = [ 1, 2, 3, 4, 5 ];
//var arr = [ 0, 1, 2, 1, 2, 3 ];
//var arr = [ 1, 1, 1, 1, 3, 3, 2, 2]
var arr = [ 2, 2, 1]


//var arr = [195593459,195593459,195593458,195593457,195593459,195593459,195593458,195593459,195593458,195593459,195593457,195593458,195593458,195593457,195593457,195593457,195593457,195593458,195593457,195593459,195593457,195593457,195593458,195593457,195593457,195593458,195593458,195593457,195593458,195593457,195593457,195593457,195593459,195593459,195593459,195593458,195593458,195593458,195593458,195593458,195593457,195593459,195593459,195593458,195593457,195593459,195593459,195593457,195593459,195593459,195593457,195593457,195593459,195593459,195593457,195593459,195593458,195593458,195593458,195593457,195593458,195593458,195593458,195593458,195593457,195593458,195593459,195593458,195593459,195593458,195593459,195593458,195593458,195593459,195593459,195593458,195593457,195593459,195593459,195593459,195593459,195593457,195593459,195593459,195593459,195593459,195593459,195593457,195593459,195593457,195593458,195593457,195593458,195593458,195593457,195593459,195593457,195593457,195593459,195593457,195593459,195593459,195593458,195593457,195593459,195593458,195593459,195593459,195593458,195593458,195593459,195593458,195593459,195593458,195593457,195593459,195593458,195593457,195593457,195593457,195593458,195593457,195593459,195593457,195593458,195593459,195593458,195593458,195593459,195593457,195593459,195593459,195593459,195593458,195593459,195593458,195593458,195593459,195593458,195593459,195593458,195593457,195593457,195593457,195593459,195593458,195593459,195593458,195593457]

longestSubarray(arr);