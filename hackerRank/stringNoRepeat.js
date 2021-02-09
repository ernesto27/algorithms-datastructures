    // // Complete the alternatingCharacters function below.
    // function alternatingCharacters(s) {
    //     s = s.split("");
    //     var response = 0;
    //     for( var x = 0; x < s.length; x++ ) {
    //         for ( var y = x + 1; y < s.length; y++ ) {
    //             if(s[x] === s[y]) {
    //                 response += 1;
    //                 s.splice(y, 1) 
    //                 y -= 1
                    
    //             } else {
    //                 break;
    //             }
    //         }
    //     }

    //     console.log(response)

    // }


function alternatingCharacters(s) {
    count = 0;
    for( var x = 0; x < s.length; x++ ) {
        if(s[x] === s[x + 1]) {
            count += 1;
        }
    }
    console.log(count)
    return count;    
}

alternatingCharacters("AAAA")
alternatingCharacters("BBBBB")
alternatingCharacters("ABABABAB")
alternatingCharacters("BABABA")
alternatingCharacters("AAABBB")

alternatingCharacters("ABABABAB")

