function workbook(n, k, arr) {
    // Check index page

    const bookArray = [];
    let chapter = 1;
    arr.forEach((item) => {
        chapter = makeWorkbook(k, item, bookArray, chapter);
    })

    console.log(bookArray)

    let response = 0;
    for ( var i = 1; i < bookArray.length; i++ ) {
        // console.log(bookArray[i])
        if(bookArray[i].includes(i)) {
            response += 1;
        }
    }

    console.log(response);

    // makeWorkbook(3, 2)
}

function makeWorkbook(problemsPerPage, problemsChapter, array, chapter){
    // Check rest
    let numberPages = Math.floor(problemsChapter / problemsPerPage);
    let restPages = problemsChapter % problemsPerPage;
    
    if (numberPages === 0) {
        numberPages = 1;
    }
    else if(restPages !== 0){
        numberPages += restPages;
    }

    let count = 1;
    for ( let x = 0; x < numberPages; x++ ) {
        // console.log(chapter)
        const items = [];
        for ( let y = 0; y < problemsPerPage; y++) {
            if(count > problemsChapter) break;
            items.push(count++);
        }

        array[chapter] = items;
    
        chapter += 1;
    }

    return chapter;

    // console.log(array)
}

var n = 5;
let k = 3;
let arr = [ 4, 2, 6, 1, 10 ];
// let arr = [ 2 ];

workbook(n, k, arr);