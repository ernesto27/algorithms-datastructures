function reformatDate(date) {
    var data;
    data = date.split(' ');
    return data[2];
}
;
console.log(reformatDate("20th Oct 2052"));
