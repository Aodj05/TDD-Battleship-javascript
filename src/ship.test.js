const ship = require('./shipMethods');

describe('checkForShip', function () {
  const checkForShip = require('./shipMethods').checkForShip;

  it('should say a ship is on player coord', function () {

   player = {
            ships: [
                {
                    locations: [[0, 0]]
                }
            ]
        };

        expect(checkForShip(player, [0, 0])).toBeTruthy();
    });
  it('should say no ship on player coord', function () {

   player = {
            ships: [
                {
                    locations: [[0, 0]]
                }
            ]
        };

        expect(checkForShip(player, [9, 9])).toBeFalsy();
    });
  it('should handle ships at multiple coords', function () {

   player = {
            ships: [
                {
                    locations: [[0, 0], [0, 1]]
                }
            ]
        };
        expect(checkForShip(player, [0, 1])).toBeTruthy();
        expect(checkForShip(player, [0, 0])).toBeTruthy();
        expect(checkForShip(player, [9, 9])).toBeFalsy();
    });
  it('should handle multiple ships', function () {

   player = {
            ships: [
                {
                    locations: [[0, 0], [0, 1]]
                },
                {
                    locations: [[1, 0], [1, 1]]
                },
                {
                    locations: [[2, 0], [2, 1], [2, 2], [2, 3]]
                }
            ]
        };
        expect(checkForShip(player, [0, 1])).toBeTruthy();
        expect(checkForShip(player, [0, 0])).toBeTruthy();
        expect(checkForShip(player, [1, 0])).toBeTruthy();
        expect(checkForShip(player, [1, 1])).toBeTruthy();
        expect(checkForShip(player, [2, 3])).toBeTruthy();
        expect(checkForShip(player, [9, 9])).toBeFalsy();
    });
});

describe('damageShip', function () {
	const damageShip = require('./shipMethods').damageShip;

	it('should register damage on a ship at a coord', function () {
		const ship = {
			locations: [[0, 0]],
			damage: []
		};

		damageShip(ship, [0, 0]);

		expect(ship.damage).not.toEqual([]);
		expect(ship.damage[0]).toEqual([0, 0]);
	});
});

describe('fire', function () {
	const fire = require('./shipMethods').fire;

	it('should handle damage on a ship at a coord', function () {
		const player = {
			ships: [
			{
				locations: [[0, 0]],
				damage: []
			}
			]
		};

		fire(player, [0, 0]);

		expect(player.ships[0].damage[0]).toEqual([0, 0]);
	});
});