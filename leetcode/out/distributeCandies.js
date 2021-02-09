function distributeCandies(candies, num_people) {
    const resp = [];
    let candiesGiven = 0;
    while (candiesGiven < candies) {
        for (let i = 0; i < num_people; i++) {
            if ((candiesGiven + (i + 1)) > candies) {
                const res = (candiesGiven + (i + 1)) - candies;
                const a = (i + 1) - res;
                resp[i] = a;
            }
            else {
                resp[i] = i + 1;
            }
            candiesGiven += i + 1;
        }
    }
    console.log(resp);
    return resp;
}
;
//distributeCandies(7, 4)
distributeCandies(10, 3);
//# sourceMappingURL=distributeCandies.js.map