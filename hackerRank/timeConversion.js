/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
   // console.log(s)

    // If PM add 12 to hours
    // IF AM rest 12 hours

    const timeFormat = s[s.length - 2] + s[s.length - 1]; 
    let response;
    let hour;
    let newHour;
    hour = s[0] + s[1];

    if(timeFormat === 'PM') {
        if( hour === '12') {
            newHour = '12';
        } else {
            newHour = parseInt(hour) + 12;
        }
    } else if (timeFormat === 'AM') {
        if( hour === '12') {
            newHour = '00';
        } else {
            newHour = hour;
        }
    } 

    response = newHour + ':' +  s.substr(3, 5);
    console.log(response);

}

//var time = '07:05:45PM';
var time = '12:45:54PM';

timeConversion(time)