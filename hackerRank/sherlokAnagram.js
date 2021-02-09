function sherlockAndAnagrams(s) {
    // If no words repeats , return 0
    // console.log(s)
    var hash = {};
    var isRepeat = false;

    for ( var x = 0; x < s.length; x++ ){
        console.log(s[x])
        // if(hash[s[x]] !== undefined) {
        //     isRepeat = true;
        //     //hash[s[x]] = parseInt(s[x]) + 1;
        //     hash[s[x]] += 1;
        // } else {
        //     hash[s[x]] = 1;
        //     hash[s[x] + s[x + 1]] = 1;
        // }

        hash[s[x]] = 1;
        if(x + 1 < s.length) {
            hash[s[x] + s[x + 1]] = 1;
            
        }

        if(x + 2 < s.length) {
            hash[s[x] + s[x + 1] + s[x + 2]] = 1;
        }
    }

    if(!isRepeat) {
        console.log('No repeat')
    }
    console.log(hash)
}
var string = 'abab';

sherlockAndAnagrams(string)
