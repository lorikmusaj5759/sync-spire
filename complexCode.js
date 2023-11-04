/** 
* Filename: complexCode.js
* Content: A complex JavaScript code demonstrating an implementation of a tic-tac-toe game.
*/

// Game State Variables
let board = [];
const player1 = 'X';
const player2 = 'O';
let currentPlayer;

// Game Initialization
function initializeGame() {
    board = Array.from(Array(9).keys());
    currentPlayer = player1;
}

// Event Listeners
document.querySelector('.restart').addEventListener('click', initializeGame);
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', makeMove));

// Make a Move
function makeMove(event) {
    const cell = event.target;
    const currentPlayerSymbol = (currentPlayer === player1) ? player1 : player2;
    if (typeof board[cell.id] === 'number') {
        updateBoard(cell.id, currentPlayerSymbol);
        if (!checkWin(board, currentPlayerSymbol) && !checkTie()) {
            togglePlayer();
        }
    }
}

// Update Board 
function updateBoard(cellID, symbol) {
    board[cellID] = symbol;
    document.getElementById(cellID).innerText = symbol;
    let gameWon = checkWin(board, symbol);
    if (gameWon) {
        gameOver(gameWon);
    }
}

// Check Win
function checkWin(board, symbol) {
    let plays = board.reduce((accumulator, cell, index) =>
        (cell === symbol) ? accumulator.concat(index) : accumulator, []);
    let gameWon = null;
    for (let [index, win] of winCombos.entries()) {
        if (win.every(elem => plays.indexOf(elem) > -1)) {
            gameWon = { index: index, player: symbol };
            break;
        }
    }
    return gameWon;
}

// Game Over (Win)
function gameOver(gameWon) {
    for (let index of winCombos[gameWon.index]) {
        document.getElementById(index).style.backgroundColor =
            (gameWon.player === player1) ? "rgba(40, 167, 69, 0.8)" : "rgba(220, 53, 69, 0.8)";
    }
    document.querySelectorAll('.cell').forEach(cell => cell.removeEventListener('click', makeMove));
}

// Check Tie
function checkTie() {
    if (board.filter(cell => typeof cell === 'number').length === 0) {
        document.querySelector('.endgame').style.display = 'block';
        document.querySelector('.endgame .text').innerText = "It's a Tie!";
        return true;
    }
    return false;
}

// Toggle Player
function togglePlayer() {
    currentPlayer = (currentPlayer === player1) ? player2 : player1;
    document.querySelector('.player-turn').innerText = (currentPlayer === player1) ? "Player 1" : "Player 2";
}

// Initialize Game
initializeGame();

// Winning Combinations
const winCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
];

// Random Complex Code...
// ...
// ...
// ...

// Random Complex Code...
// ...
// ...
// ...