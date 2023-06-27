export const setGameStarter = () => {
    const appData = getData();
    const rounds = appData.game.history.length;
    if (rounds === 0) {
        appData.game.nextSide = Math.floor(Math.random() * 2) === 0 ? 'x' : 'o';
        saveData(appData);
        return;
    }

    const previousRound = appData.history[rounds - 1];
    const previousRoundStarter = previousRound.starter;
    if (previousRoundStarter === 'x') {
        appData.game.nextSide = 'o';
        saveData(appData);
    } else {
        appData.game.nextSide = 'x';
        saveData(appData);
    }
}

const getGameWinOrDrawCombination = () => {
    // get the game data
}



const determineWinner = () => {
    const settings = getData();
    const winningCombinations = settings.winningCombinations;
    const cellValues = settings.cells

}
//console.log(determineWinner());

const determineTie = () => {
    const settings = getData();
    const cells = document.querySelectorAll('.cell');
    let isTie = true;
    for (const cell of cells) {
        if (cell.textContent === '') {
            isTie = false;
            break;
        }
    }
    if (isTie) {
        settings.winner = 'tie';
        saveData(settings);
    }
}

const determineGameResult = () => {
    determineWinner();
    determineTie();
}

const resetGame = () => {
    const settings = getData();
    settings.winner = null;
    settings.winningCombination = null;
    settings.turn = setGameStarter();
    saveData(settings);
    const cells = document.querySelectorAll('.cell');
    for (const cell of cells) {
        cell.innerHTML = '';
        cell.classList.remove('winning-cell');
        cell.classList.remove('disabled');
    }
}

const startGame = () => {

}

const endGame = () => {
    const settings = getData();
    settings.isPlaying = false;
    saveData(settings);
}


// path: modules/game.js