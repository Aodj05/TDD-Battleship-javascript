const board = require('./src/gameInstance');
const player = require('./src/playerMethods');

const player1 = require('./src/playerMethods');
const player2 = require('./src/playerMethods').takeTurn(oppPlayer);

/*player2.board.placeShip();

function battleShip() {
    const 
}*/

var rows = 10;
var cols = 10;
var squareSize = 50;

var boardCont = document.getElementById('div');

for (i = 0; i < cols; i++) {
    for (j = 0; j < rows; j++) {
        var square = document.createElement('div');
        boardCont.appendChild(square);

        square.id = 's' + j + i;

        var topPos = j * squareSize;
        var leftPos = i * squareSize;

        square.style.top = topPos * 'px';
        square.style.leftPos = leftPos * 'px';
    }
}

var hitCount = 0;

var board = [
                [0,0,0,1,1,1,1,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,1,0,0,0],
                [0,0,0,0,0,0,1,0,0,0],
                [1,0,0,0,0,0,1,1,1,1],
                [1,0,0,0,0,0,0,0,0,0],
                [1,0,0,1,0,0,0,0,0,0],
                [1,0,0,1,0,0,0,0,0,0],
                [1,0,0,0,0,0,0,0,0,0]
                ]
boardCont.addEventListener('click', fire, false);

function fire(e) {
    if (e.target !== e.currTarget) {
        var row = e.target.id.substring(1, 2);
        var col = e.target.id.substring(2, 3);

        if (board[row][col] == 0) {
            e.target.style.background = '#bbb';
            board[row][col] = 3;
        } else if (board[row][col] == 1) {
            e.target.style.background = 'red';
            board[row][col] = 2;
            hitCount++;

            if (hitCount == 17) {
                alert('You win!');
            }
        } else if (board[row][col] > 1) {
            alert('Already fired at this location');
        }
    }
    e.stopPropagation();
}