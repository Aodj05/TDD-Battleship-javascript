const game = require('./gameInstance.js');

describe('gameInstance',  () => {
    it('returns a function', () => {
        const board = require('./gameInstance').gameInstance;
        expect(typeof board).toBe('function');
    });
});

describe('gameInstance', function () {
    describe('checkGameState', function () {
        const checkGameState = require('./gameInstance').checkGameState;
        xit('should tell when game is over', function(){
            const players = [
            {
                ships:[
                  {
                    locations: [[0, 0]],
                    damage: [[0, 0]]
                  }
                ]
              }
            ];
            const actual = checkGameState(players);
            expect(actual).toBeFalsy;
        });
    });

    describe('takeTurn', function () {
        const takeTurn = require('./gameInstance').takeTurn;
        var guess, player;

        beforeEach(function() {
          guess = function () { return [0, 0]; };
          player = {
            ships: [
              {
                locations: [[0, 0]],
                damage: []
              }
            ]
          };
        });

        it('should return false at game end', function () {
          const actual = takeTurn(player, guess);
          expect(actual).toBeFalsy;
        });
    });
    function saveGame (callback) {
        setTimeout(function () {
            callback();
        }, 1000);
    }

    describe('saveGame', function() {
        it('should update save state', function (done) {
            var status = 'game not saved...';
            saveGame(function () {
                status = 'game saved!';
                expect(status).toEqual('game saved!');
                done();
            });
        });
    });
});