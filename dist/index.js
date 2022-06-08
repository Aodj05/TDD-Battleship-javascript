//const board = require('./src/gameInstance');
//const player = require('./src/playerMethods');

//const player1 = require('./src/playerMethods');
//const player2 = require('./src/playerMethods').takeTurn(oppPlayer);

/*player2.board.placeShip();

function battleShip() {
    const 
}*/

var rows = 10;
var cols = 10;

var container = document.querySelector('#board');

for (var i = 0; i < cols; i++) {
    var squareCol = document.createElement("tr");
    squareCol.id = "row" + i;
    container.appendChild(squareCol);

    for (var j = 0; j < rows; j++) {
        var squareRow = document.createElement('td');
        squareCol.appendChild(squareRow);
        squareRow.id = 'row' + i + '' + 'col' + j;
    }
}

var gameInstance = {
    SHIPSIZE: [5, 4, 3, 3, 2],
    hits: 17,
    shots: 25,

    destroyer: 2,
    submarine: 3,
    cruiser: 3,
    battleship: 4,
    carrier: 5,

    board: [
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
    ]
}

function checkHor (xCoord, shipsize, y, startY, yCoord, x, startX, direction) {

    var arr = [];

    if (direction === 'h') {
        for (startY; startY < (y + shipsize); startY++) {
            if (typeof gameInstance.board[xCoord][startY] != 'number') {
                console.log('empty' + startY);
                arr.push('empty')
            } else {
                console.log('not empty' + startY);
                arr.push('not empty');
            }
        }
        console.log(arr);
        if(arr.includes('not empty')) {
            return true;
        } else {
            return false;
        }
    } else {
        for (startX; startX < (x + shipsize); startX++) {
            if (typeof gameInstance.board[startX][yCoord] != 'number') {
                console.log('empty' + startX);
                arr.push('empty');
            } else {
                console.log('not empty' + startX);
                arr.push('not empty');
            }
        }
        console.log(arr);
        if (arr.includes('not empty')) {
            return true;
        } else {
            return false;
        }
    }
}

function randShips() {
    gameInstance.SHIPSIZE.forEach(function(shipsize) {
        do {
            var xCoord = Math.floor(Math.random() * 9);
            var yCoord = Math.floor(Math.random() * 9);

            var directionNum = Math.floor(Math.random() * 2);
            var direction = '';

            if(directionNum === 0) {
                direction = 'h';
            } else {
                direction = 'v';
            }

            var y = yCoord;
            var startY = yCoord;

            if (startY + shipsize >= 10) {
                startY = 10 - shipsize;
                var y =startY;
            };

            var x = xCoord;
            var startX = xCoord;

            if (startX + shipsize >= 10) {
                startX = 10 - shipsize;
                var x = startX;
            };
        }
        while (checkHor(xCoord, shipsize, y, startY, yCoord, x, startX, direction))

        if (direction === 'h') {
            for (startY; startY < (y + shipsize); startY++) {
                gameInstance.board[xCoord][startY] = shipsize;
            }
        }       else {
            for (startX; startX < (x + shipsize); startX++) {
                gameInstance.board[startX][yCoord] = shipsize;
            }
        }
    })
}

container.addEventListener('click', fire, false)

function fire(e) {
    var row = e.target.id.substring(3, 4);
    var col = e.target.id.substring(8, 10);
    if (gameInstance.board[row][col] == "") {
        e.target.syle.background = 'black';
        gameInstance.board[row][col] = "miss";
        gameInstance.shots--;
    }
    if (typeof gameInstance.board[row][col] == "number") {

        e.target.syle.background = 'red';
        gameInstance.board[row][col] = "hit";
        gameInstance.hits--;
        gameInstance.shots--;
    }

    document.getElementById('stats').innerHTML = 'Shots Remaining: ' + gameInstance.shots;

    battleship()
}

function battleship() {
    if (gameInstance.hits == 0) {
        document.querySelector('#msg').innerText = 'All ships sunk';
    }
    if (gameInstance.shots == 0) {
        document.querySelector('#msg').innerText = 'All shots taken';
        showBoard()
    }
}

function showBoard() {
    if (gameInstance.shots == 0) {
        gameInstance.board.forEach(function(row, x) {
            row.forEach(function(cell, y) {
                if (typeof cell == "number") {
                    document.getElementById('row' + x + ' col' + y).style.background = 'red';                    
                } else if (cell == "miss") {
                    document.getElementById('row' + x + ' col' + y).style.background = 'black';
                }
            })
        })
    }
}

function resetBoard() {
    gameInstance.shots = 25;
    gameInstance.board = [
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
    ];

    gameInstance.board.forEach(function(row, x) {
        row.forEach(function(cell, y) {
            document.getElementById('row' + x + ' col' + y).style.background = 'rgba(255, 255, 255, 0)';
            document.getElementById('board').style.background = "'url('sea.gif')";

            if (gameInstance.shots == 0) {
                gameInstance.shots = 25;
            }
        })
    })
    document.querySelector('#msg').innerText = 'Try to sink all ships';
    randShips()
}