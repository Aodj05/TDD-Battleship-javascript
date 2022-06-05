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