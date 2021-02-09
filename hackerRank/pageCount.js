/*
 * Complete the pageCount function below.
 */
function pageCount(n, p) {
    /*
     * Write your code here.
     */
    console.log(n)
    console.log(p)

    
    const pageTurns = Math.floor(p / 2);
    const totalTurns = Math.floor(n / 2);

    /* Returns the total number of page turns it takes to get
    to a page or how many it requires if starting from the back */

    return Math.min(pageTurns, totalTurns - pageTurns);

}

pageCount(6, 2)