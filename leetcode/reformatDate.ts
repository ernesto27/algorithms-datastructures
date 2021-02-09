function reformatDate(date: string): string {
    let data: string[];
    data = date.split(' ');

    return data[2]

};


console.log(reformatDate("20th Oct 2052"))