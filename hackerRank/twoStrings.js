function twoStrings(s1, s2) {
    console.log(s1)
    console.log(s2)

    var response = 'NO';
    for(var i = 0; i < s1.length; i++) {
        if(s2.includes(s1[i])) {
            response = 'YES';
            break;
        }
    }
    console.log(response)
}

twoStrings('hello', 'world');