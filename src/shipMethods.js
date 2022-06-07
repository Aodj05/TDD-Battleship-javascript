const shipFactory = (coordsArr) => {
  const hitCoords = [];
  const coords = coordsArr;

  const isSunk = () => {
    if(coords.length !== hitCoords.length) return false;

    let [a, b] = [
    coords.map((i) => i.join('')).sort(),
    hitCoords.map((i) => i.join('')).sort()
    ];

    return a.every((coord) => b.include(coord));
  };

  const setCoords = (newCoords) => {
    while (coords.length !== 0) coords.pop();
    coords.push(...newCoords);
  };

  return {
    coords,
    isSunk,
    setCoords,
    length: () => coords.length,
    hit: (hitCoord) => hitCoords.push(hitCoord),
    hitCoords: () => hitCoords,
  };
};

function checkForShip (player, coords) {
   var shipPresent, ship;

  for (var i = 0; i < player.ships.length; i++) {
  ship = player.ships[i];

  shipPresent = ship.locations.filter(function(actualCoord) {
    return (actualCoord[0] === coords[0]) && (actualCoord[1] === coords[1]);
  })[0];

  if (shipPresent) {
    return ship;
   }
  }
  return false;
}

function damageShip (ship, coords) {
  ship.damage.push(coords);
}

function fire (player, coords) {
  var ship = checkForShip(player, coords);

  if (ship) {
  	damageShip(ship, coords);
  }
}

module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;
module.exports.fire = fire;
module.exports.shipFactory = shipFactory;