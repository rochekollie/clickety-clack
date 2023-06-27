/** store default values of the app data as an object */
const d = new Date();
const locales = d.toLocaleString();
const data = {
    _appearance: {
        theme: {
            dark: 'dark',
            light: 'light',
            system: 'system',
        },
        isDarkMode: false,
        isLightMode: false,
        isSystemMode: false
    },
    _game: {
        board: {
            size: {
                width: 0,
                height: 0,
            },
            cells: [
                {
                    id: 0,
                    value: '',
                    size: {
                        width: 0,
                        size: 0
                    }
                },
                {
                    id: 1,
                    value: '',
                    size: {
                        width: 0,
                        size: 0
                    }
                },
                {
                    id: 2,
                    value: '',
                    size: {
                        width: 0,
                        size: 0
                    }
                },
                {
                    id: 3,
                    value: '',
                    size: {
                        width: 0,
                        size: 0
                    }
                },
                {
                    id: 4,
                    value: '',
                    size: {
                        width: 0,
                        size: 0
                    }
                },
                {
                    id: 5,
                    value: '',
                    size: {
                        width: 0,
                        size: 0
                    }
                },
                {
                    id: 6,
                    value: '',
                    size: {
                        width: 0,
                        size: 0
                    }
                },
                {
                    id: 7,
                    value: '',
                    size: {
                        width: 0,
                        size: 0
                    }
                },
                {
                    id: 8,
                    value: '',
                    size: {
                        width: 0,
                        size: 0
                    }
                }
            ],
            previousFilledCell: '',
            previousFilledCellIndex: null
        },
        isMultiplayer: false,
        difficulty: '',
        opponent: '',
        players: [
            {
                name: '',
                side: '',
                score: 0,
                isWinner: false,
                isLoser: false,
                isPlaying: false,
                isPaused: false,
                isFinished: false,
                isSaved: false,
                isLoaded: false,
                isStarted: false,
                isRestarted: false,
                isResumed: false,
                isWon: false,
                isLost: false,
                isDraw: false,
            },
        ],
        starter: '',
        previousSide: '',
        nextSide: '',
        history: [],
        score: {
            winner: null,
            comment: '',
            isWin: null,
            isLost: null,
            isDraw: null,
            rounds: 0,
        },
        status: {
            isPlaying: false,
            isPaused: false,
            isFinished: false,
            isSaved: false,
            isLoaded: false,
            isStarted: false,
            isRestarted: false,
            isResumed: false,
            isWon: false,
            isLost: false,
            isDraw: false,
        },
        timeLapsed: 0,
        winningCombinations: [
            [0, 1, 2], // top row
            [3, 4, 5], // middle row
            [6, 7, 8], // bottom row
            [0, 3, 6], // left column
            [1, 4, 7], // middle column
            [2, 5, 8], // right column
            [0, 4, 8], // diagonal top left to bottom right
            [2, 4, 6] // diagonal top right to the bottom left
        ],
    },
    _leaderboard: {
        players: [],
        scores: [],
        ranks: [],
        isSorted: false,
        isRanked: false
    },
    _settings: {
        side: 'x',
        difficulty: 'easy',
        opponent: 'computer',
        isSoundOn: false,
        isMusicOn: false,
        soundVolumeLevel: 0.5,
        musicVolumeLevel: 0.5,
        isSoundMuted: false,
        isMusicMuted: false,
        nowPlayingSound: null,
        nowPlayingMusic: null,
    },
    _time: {
        seconds: d.getSeconds(),
        minutes: d.getMinutes(),
        hour: d.getHours(),
        dayShortName: d.toLocaleString('default', {weekday: 'short'}),
        dayFullName: d.toLocaleString('default', {weekday: 'long'}),
        dateNumber: d.getDate(),
        monthNumber: d.getMonth() + 1,
        monthShortName: d.toLocaleString('default', {month: 'short'}),
        monthFullName: d.toLocaleString('default', {month: 'long'}),
        shortYear: parseInt(d.toLocaleString('default', {year: '2-digit'})),
        fullYear: d.getFullYear(),
        meridian: d.getHours() >= 12 ? 'PM' : 'AM',
        getTimeText(locales = 'en-US') {
            return d.toLocaleTimeString(locales);
        },
        get dateText() {
            return d.toLocaleDateString();
        },
        // get shortDateText(locales = 'en-US') {
        //     return d.toLocaleDateString(locales, {weekday: 'short', month: 'short', day: 'numeric'});
        // },
        // getLongDateText(locales = 'en-US') {
        //     return d.toLocaleDateString(locales, {weekday: 'long', month: 'long', day: 'numeric'});
        // },
        // getShortTimeText(locales = 'en-US') {
        //     return d.toLocaleTimeString(locales, {hour: 'numeric', minute: 'numeric'});
        // },
        // getLongTimeText(locales = 'en-US') {
        //     return d.toLocaleTimeString(locales, {hour: 'numeric', minute: 'numeric', second: 'numeric'});
        // },
    },

    get appearance() {
        return this._appearance;
    },

    set appearance(value) {
        this._appearance = value;
        saveData(data);
    },

    get game() {
        return this._game;
    },

    set game(value) {
        this._game = value;
        saveData(data);
    },

    get leaderboard() {
        return this._leaderboard;
    },

    set leaderboard(value) {
        this._leaderboard = value;
        saveData(data);
    },

    get settings() {
        return this._settings;
    },

    set settings(value) {
        this._settings = value;
        saveData(data);
    },


    get time() {
        return this._time;
    },

    set time(value) {
        this._time = value;
        saveData(data);
    }
};

/**
 * Returns the values of settings as an object
 * @returns {object} - the game settings
 * @example const settings = getAppData();
 * */
export const getData = () => {
    if (!localStorage.getItem('data')) {
        return data;
    }
    return JSON.parse(localStorage.getItem('data'));
}

export const getAppearance = () => getData()._appearance;
export const getGame = () => getData()._settings.game;
export const getSettings = () => getData()._settings;
export const getTime = () => getData()._time;

// Takes an object and saves it to the local storage as a stringified
const saveData = (data) => localStorage.setItem('data', JSON.stringify(data));


/** Mutates an object's property and values with specified data and saves the object to the local storage
 * @param object - the data object to be updated
 * @param value - the value to be updated
 * @returns {void}
 * @example updateObject('difficulty', 'easy');
 * */
export const updateObject = (object, value) => {
    const settings = getData();
    settings[object] = value;
    saveData(settings);
}

/**
 * Returns the game result object
 * @returns {{difficulty: string, winner: string, starter: (string|string), winningCombination: null, opponent: string, timeLapsed}}
 * @example const result = setGameData();
 */
export const setGameData = () => {
    const data = getData();
    const gameRecords = {
        starter: data.game.nextSide,
        winner: '',
        difficulty: data.settings.difficulty,
        opponent: data.settings.opponent,
        winOrDrawCombination: getGameWinOrDrawCombination(),
        timeLapsed: data.game.timeLapsed,
        cells: data.board.cells,
    }
    data.game.history.push(gameRecords);
}

/**
 * Saves the game result to the local storage
 * @returns {void}
 * @example saveGameResult();
 */
export const saveGameResult = (result) => {
    const settings = getData();
    settings.history.push(result);
    saveData(settings);
}

export const displayGameResult = () => {
    const data = getData();
    const winner = document.querySelector('#winner');
    const winningCombination = data.winningCombination;
    if (data.winner === 'tie') {
        winner.textContent = 'Tie';
    } else {
        winner.textContent = data.winner.toUpperCase() + ' wins';
    }

    if (winningCombination) {
        const cells = document.querySelectorAll('.cell');
        for (const cell of cells) {
            if (winningCombination.includes(parseInt(cell.id))) {
                cell.classList.add('winning-cell');
            }
        }
    }
}


// path: modules/data.js
