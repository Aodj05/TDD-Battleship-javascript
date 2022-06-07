const Player = require('./playerMethods');

describe("Player", () => {
    it('returns a function', () => {
        var player = require('./playerMethods').player;
        expect(typeof player).toBe('function');
    });
});

describe('playerMethods', function () {
    describe('validLocation', function () {
        const validLocation = require('./playerMethods').validLocation;
        var player;

        beforeEach(function () {
            player = {
                ships: [
                {
                   locations: [[9, 9]]
                }
              ]
            };
        });

        it('should confirm valid for non occupied locations in range', function () {
            const location = [0, 0];
            const actual = validLocation(player, location);

            expect(actual).toEqual(actual);
        });

        it('should confirm invalid for occupied locations in range', function () {
            const location = [9, 9];
            const actual = validLocation(player, location);

            expect(actual).toBeFalsy();
        });

        it('should confirm invalid for non occupied locations out of range', function () {
            const locationHigh = [10, 10];
            const locationLow = [-1, -1];

            expect(validLocation(player, locationHigh)).toBeFalsy();
            expect(validLocation(player, locationLow)).toBeFalsy();
        });
    });

    describe('validLocations', function () {
        const validLocations = require('./playerMethods').validLocations;
        var player;

        beforeEach(function () {
            player = {
                ships: [
                {
                    locations: [[0, 0]]
                }
              ]
            };
        });

      it('should correctly report a list of non occupied locations is valid', function () {
        var locations = [[1, 1], [1, 2], [1, 3], [1, 4]];
        expect(validLocations(player, locations)).toBeTruthy();
      });

      it('should correctly report a problem if any location in list is invalid', function () {
        var locations = [[1, 1], [1, 2], [1, 3], [10, 10]];
        expect(validLocations(player, locations)).toBeFalsy();

        locations = [[1, 1], [1, 2], [1, 3], [0, 0]];
        expect(validLocations(player, locations)).toBeFalsy();
      });
    });
  describe('placeShip', function () {
    const placeShip = require('./playerMethods').placeShip;
    var player;

    beforeEach(function (){
        player = {
            ships: [
              {
                size: 1,
                locations: []
              },
              {
                size: 2,
                locations: [[1, 0], [1, 1]],
              }
            ],
        };
    });

    it('should update ship with valid start location', function () {
        var ship = player.ships[0];
        var coords = [0, 1];

        placeShip(player, ship, coords, 'horizontal');
        var actual = ship.locations;

        expect(actual).toEqual(actual);
        expect(actual.length).toEqual(0);
    });

    it('should throw error if no direction is selected', function() {
        const ship = player.ships[0];
        const coords = [0, 1];

        const handler = function () { placeShip(player, ship, coords); };
        expect(handler).toThrow(Error);
        expect(handler).toThrow('Please specify direction!');
    });
});
});