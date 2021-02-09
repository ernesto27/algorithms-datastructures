function destCity(paths) {
    var response = '';
    for (var x = 0; x < paths.length; x++) {
        var lastPath = paths[x][paths[x].length - 1];
        var found = false;
        for (var y = 0; y < paths.length; y++) {
            if (x === y)
                continue;
            if (paths[y].indexOf(lastPath) !== -1) {
                found = true;
                break;
            }
        }
        if (found === false) {
            response = lastPath;
        }
    }
    return response;
}
;
console.log(destCity([["A", "Z"]]));
