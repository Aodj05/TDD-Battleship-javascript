const fire = require('./shipMethods.js').fire;

function checkGameState (players) {
  return false;
}

function takeTurn (oppPlayer,guessFunction) {
  const coords = guessFunction();
  fire(oppPlayer, coords);
  const gameOver = checkGameState();

  return gameOver;
}

module.exports.checkGameState = checkGameState;
module.exports.takeTurn = takeTurn;