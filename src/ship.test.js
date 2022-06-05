const ship = require('./shipMethods');

describe('checkForShip', function () {
  const checkForShip = require('./shipMethods').checkForShip;
  var player;

  beforeEach(function () {
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
  });

  afterAll(function () {
		console.log('Entire test suite completed');
	});

	afterEach(function (){
		console.log('One unit test completed');
	});

  it('should say a ship is on player coord', function () {

        expect(checkForShip(player, [0, 0])).toEqual(player.ships[0]);
    });
  it('should say no ship on player coord', function () {

        expect(checkForShip(player, [9, 9])).toBeFalsy();
    });
  it('should handle ships at multiple coords', function () {

        expect(checkForShip(player, [0, 1])).toEqual(player.ships[0]);
        expect(checkForShip(player, [0, 0])).toEqual(player.ships[0]);
        expect(checkForShip(player, [9, 9])).toBeFalsy();
    });
  it('should handle multiple ships', function () {

        expect(checkForShip(player, [0, 1])).toEqual(player.ships[0]);
        expect(checkForShip(player, [0, 0])).toEqual(player.ships[0]);
        expect(checkForShip(player, [1, 0])).toEqual(player.ships[1]);
        expect(checkForShip(player, [1, 1])).toEqual(player.ships[1]);
        expect(checkForShip(player, [2, 3])).toEqual(player.ships[2]);
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
	var player;

	beforeEach(function () {
     player = {
			ships: [
			{
				locations: [[0, 0]],
				damage: []
			}
		  ]
		};
	});



	it('should handle damage on a ship at a coord', function () {
		fire(player, [0, 0]);
		expect(player.ships[0].damage[0]).toEqual([0, 0]);
	});
	it('should not handle damage if no ship at a coord', function () {
		fire(player, [9, 9]);
		expect(player.ships[0].damage).toEqual([]);
	});
});