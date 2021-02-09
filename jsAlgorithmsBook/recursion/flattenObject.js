function flatterDictionary(dictionary) {
    var flatterDictionary = {};

    function flattenDitionaryHelper(dictionary, propName) {
        if ( typeof dictionary != 'object' ) {
            flatterDictionary[propName] = dictionary;
            return;
        }

        for ( var prop in dictionary ) {
            if ( propName === '' ) {
                flattenDitionaryHelper(dictionary[prop], propName + prop);
            } else {
                flattenDitionaryHelper(dictionary[prop], propName + '.' + prop);
            }
        }
    }

    flattenDitionaryHelper(dictionary, '');
    // console.log(flatterDictionary);
    return flatterDictionary;
}

var dictionary = {
'Key1': '1',
'Key2': {
    'a' : '2',
    'b' : '3',
    'c' : {
        'd' : '3',
        'e' : '1'
    }
    }
}

console.log(flatterDictionary(dictionary));

