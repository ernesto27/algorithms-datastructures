function checkIfExist(arr: number[]): boolean {

    for ( let x: number = 0; x < arr.length; x++ ) {
        for ( let y: number = 0; y < arr.length; y++ ) {
            if( x === y ) continue;
            const sum: number = arr[y] * 2; 
            if ( sum === arr[x] ) {
                return true;
            }
        }
    }
    
    return false;
};

console.log(checkIfExist([10,2,5,3]))