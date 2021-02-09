function sortString(s) {
    let str = s.split('');
    let result = '';
    str.sort();
    let backwards = false;
    while(str.length) {
        if(backwards) { 
            for(let i = str.length-1; i >= 0; i--) {
                if(str[i] != str[i-1]) {
                    result+= str[i];
                    str.splice(i,1)
                }
            }
        } else {
            for(let i = 0; i < str.length; i++) {
                if(str[i] != str[i+1]) {
                    result += str[i];
                    str.splice(i, 1)
                    i--;
                }
            }
        }
     
        backwards = !backwards
    }
    return result;
}

// console.log(sortString("aaaabbbbcccc"));
console.log(sortString("leetcode"));
