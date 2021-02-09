function singleNumber(nums: number[]): number {
    
    var objTemp:any = {};
    
    nums.forEach((item) => {
        if(objTemp[item]) {
            objTemp[item] = objTemp[item] + 1;
        } else {
            objTemp[item] = 1;
        }
    });
    
    let response:number = 0;
    
    for ( const prop in objTemp ) {
        if(objTemp[prop] === 1) {
            response = parseInt(prop);
            break;
        }
        
    }
    console.log(response)
    return response;

};

singleNumber([4,1,2,1,2])