function reverseString(index, str) {
    if( !str || index >= str.length ) {
        return;
    }
    reverseString(index + 1, str);
    console.log(str[index]);

}

reverseString(0, 'hello');
