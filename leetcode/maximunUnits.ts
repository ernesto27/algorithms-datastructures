function maximumUnits(boxTypes: number[][], truckSize: number): number {
    let resp:number = 0;
    boxTypes.sort((a, b) => b[1] - a[1]);

    for (let x:number = 0; x < boxTypes.length; x++) {
        if (truckSize > 0) {
            // console.log(truckSize - boxTypes[x][0]);
            if ((truckSize - boxTypes[x][0]) >= 0) {
                resp += (boxTypes[x][0] * boxTypes[x][1]);
                truckSize -= boxTypes[x][0];
            } else {
                let newCount = (truckSize - boxTypes[x][0]) + boxTypes[x][0];
                resp += (newCount * boxTypes[x][1]);
                truckSize -= newCount;
            }
        } else {
            break;
        }
    }

    return resp;

};

// console.log(maximumUnits([[1,3],[2,2],[3,1]], 4));
console.log(maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10));