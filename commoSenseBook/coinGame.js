function gameWinner(numberOfCoins, currentPlayer = 'you') {
    if (numberOfCoins <= 0) {
        return currentPlayer;
    }

    var nextPlayer = '';
    if (currentPlayer == 'you') {
        nextPlayer = 'them';
    } else if (currentPlayer == 'them') {
        nextPlayer = 'you';
    }

    if (gameWinner(numberOfCoins - 1, nextPlayer) == currentPlayer || 
        gameWinner(numberOfCoins - 2, nextPlayer) == currentPlayer) {
            return currentPlayer;
        } else {
            return nextPlayer;
        }
}

console.log(gameWinner(1))