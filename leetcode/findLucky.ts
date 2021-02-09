function findLucky(arr: number[]): number {
    const map: {} = {}

    for ( let i: number = 0; i < arr.length; i++ ) {
        if ( map[arr[i]] !== undefined ) {
            map[arr[i]] += 1; 
        } else {
            map[arr[i]] = 1;
        }
    }

    const resp: number[] = []
    for ( let prop in map ) {
        if (Number(prop) === map[prop] ) {
            resp.push(map[prop]);
        }
    }

    if( resp.length === 0) return -1;
    return Math.max(...resp);
};

console.log(findLucky([2,2,3,4]))