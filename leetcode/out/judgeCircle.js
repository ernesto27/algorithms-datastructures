function judgeCircle(moves) {
    console.log(moves);
    let response = true;
    const map = {};
    for (let x = 0; x < moves.length; x++) {
        if (map[moves[x]] !== undefined) {
            map[moves[x]] += 1;
        }
        else {
            map[moves[x]] = 1;
        }
    }
    console.log(map);
    console.log(map['L']);
    if ((map['L'] !== undefined || map['R'] !== undefined) && map['L'] !== map['R']) {
        response = false;
    }
    if ((map['D'] !== undefined || map['U'] !== undefined) && map['D'] !== map['U']) {
        response = false;
    }
    console.log(response);
    return response;
}
;
//judgeCircle("LDRRLRUULR")
judgeCircle("UURR");
//# sourceMappingURL=judgeCircle.js.map