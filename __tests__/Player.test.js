const Player = require('../lib/Player');
const Potion = require('../lib/Potion');
jest.mock('../lib/Potion'); // potion mockup for testing a dependent function


// Player object must have a name and three stats defined
test('creates a player object', () => {
    const player = new Player('Dave');
  
    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual( //  player's inventory should be an array containing an object.
        expect.arrayContaining([expect.any(Object)])
      );
  });

  test("gets player's stats as an object", () => {
    const player = new Player('Dave');
    // verify player object has the needed properties
    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
  });

  // verify created player has an invetory
  test('gets inventory from player or returns false', () => {
    const player = new Player('Dave');
  
    expect(player.getInventory()).toEqual(expect.any(Array));
  
    player.inventory = [];
  
    expect(player.getInventory()).toEqual(false);
  });