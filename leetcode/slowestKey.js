function slowestKey(releaseTimes, keysPressed) {
    var greatest;
    var resp;
    for (var x = 0; x < releaseTimes.length; x++) {
        if (x === 0) {
            greatest = releaseTimes[x];
            resp = keysPressed[x];
        }
        else {
            var current = releaseTimes[x] - releaseTimes[x - 1];
            if (current > greatest) {
                greatest = current;
                resp = keysPressed[x];
            }
            else if (current === greatest) {
                if (keysPressed[x] > resp) {
                    resp = keysPressed[x];
                }
            }
        }
    }
    return resp;
}
;
// console.log(slowestKey([9,29,49,50], "cbcd"))
console.log(slowestKey([12, 23, 36, 46, 62], "spuda"));
