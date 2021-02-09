function frequencySort(nums) {
    const map = {};
    let resp = [];

    nums.forEach((item) => {
        if (map[item] !== undefined) {
            map[item] += 1;
        } else {
            map[item] = 1;
        }
    });

    const sortArr = Object.entries(map)
    sortArr.sort(([key1, value1], [key2, value2]) => {
        if(value1 === value2) {
            return key2 - key1
        }
        return value1 - value2
    })

    
    for (let i = 0; i < sortArr.length; i++) {
        console.log(Number(sortArr[i][0]))
        console.log(sortArr[i][1])
        console.log('-----');
        for ( let x = 0; x < sortArr[i][1]; x++) {
            resp.push(Number(sortArr[i][0]));
        }
    }
    // console.log(map)
    // console.log(sortArr)
    console.log(resp)
    return resp;

};

// frequencySort([1,1,2,2,2,3])
// frequencySort([2,3,1,3,2])
// frequencySort([-1,1,-6,4,5,-6,1,4,1])
frequencySort([3,8,7,-7,5,3,-7])




