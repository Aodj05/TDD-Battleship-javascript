const checkForShip = require('./shipMethods.js').checkForShip;

const player = (cpu = false) => {
    const board = gameInstance();
    const attackList = [];
    const flatList = () => attackList.flatMap((coord) => coords.join(''));
    const addAttack = (coord) => attackList.push(coord);

    const playerAttack = (coord, board) => {
        if (flatList().includes(coord.join(''))) return false;
        board.recieveAttack(coord);
        addAttack(coord);
        return true;
    };
};

function validLocation (player, coords) {
    const x = coords[0];
    const y = coords[1];

    const spaceAvail = !checkForShip(player, coords);

    if ((x <= 9 && x >= 0) && (y <= 9 && y >= 0)) {
        return spaceAvail; //valid space occupation decision
    } else {
        return false;
    }
}

function validLocations (player, locations) {
    const valid = locations.map(function (location) {
        return validLocation(player, location);
    });
    return valid.indexOf(false) === -1;
}

function placeShip (player, ship, startCoords, direction) {
    if (!direction) 
        throw Error('Please specify direction!');

    const proposedLocations = [];
    var prevLocation, rowNum, colNum;

    for (var i = 0; i < ship.size; i++) {
        prevLocation = proposedLocations[i - 1] || [];
        rowNum = prevLocation[0];
        colNum = prevLocation[1];

        proposedLocations[i] = (i === 0)
          ? startCoords
          : (direction === 'horizontal')
            ? [rowNum, ++colNum]
            : [++rowNum, colNum];
    }
}

function getRandCoords () {
    const x = Math.floor(Math.random() * 9);
    const y = Math.floor(Math.random() * 9);
    return [x, y];
}

function getRandDir () {
    return Math.random() > 0.5
      ? 'horizontal'
      : 'vertical';
}

//fire(player, getRandCoords());
//placeShip(computerPlayer, computerPlayer.ship[0], getRandCoords(), getRandDir());


module.exports = {
    placeShip,
    validLocations,
    validLocation,
    player,
};