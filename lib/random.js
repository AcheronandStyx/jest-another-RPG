const { TestWatcher } = require('jest');

function randomNumber() {
    return Math.floor(Math.random() * 9 + 1);
}

module.exports = randomNumber;

/*
  const randomNumber = require('../lib/random.js');
  test('gets random number between 1 and 10', () => {
      expect(randomNumber()).toBeGreaterThanorEqual(1);
      expect(randomNumber()).toBeLessThanOrEqual(10);
  });
*/