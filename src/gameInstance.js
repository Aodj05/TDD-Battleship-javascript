const fire = require('./shipMethods.js').fire;

const gameInstance = () => {
  const grid = build();
  const misses = [];
  const ships = [];

  function build ()  {
    let grid = [];
    for (let i = 0; i < 10; i++) {
        grid[i] = ['', '', '', '', '', '', '', '', '', '', ''];
    }
    return grid;
  }
};

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
module.exports.gameInstance = gameInstance;