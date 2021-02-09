function distributeCandies(candies: number, num_people: number): number[] {

    const resp: number[] = [];
    let candiesGiven: number = 0;

    while( candiesGiven < candies ) {
        for ( let i: number = 0; i < num_people; i++ ) {
            if ( (candiesGiven + (i + 1)) > candies) {
                const res: number = (candiesGiven + (i + 1)) - candies;
                const a: number = (i + 1 ) - res;
                resp[i] = a;
            } else {
                resp[i] = i + 1;
            }

            candiesGiven += i + 1;
        }
    }

    console.log(resp)
    return resp;
    
};

//distributeCandies(7, 4)
distributeCandies(10, 3)