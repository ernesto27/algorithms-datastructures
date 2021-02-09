function destCity(paths: string[][]): string {
    let response: string = '';
    for( let x: number = 0; x < paths.length; x++ ) {
        let lastPath: string = paths[x][paths[x].length - 1]
        let found: boolean = false;

        for ( let y: number = 0; y < paths.length; y++ ) {
            if( x === y ) continue;
            if(paths[y].indexOf(lastPath) !== -1) {
                found = true;
                break;
            }
        }

        if ( found === false ) {
            response = lastPath;
        }
    }

    return response;
};

console.log(destCity([["A","Z"]]))