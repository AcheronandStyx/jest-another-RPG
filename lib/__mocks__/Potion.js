// When mocking, Jest will always look for a matching mock file in the same location as the module being mocked. In this case, lib/__mocks__/Potion.js matches lib/Potion.js.


module.exports = function() {
    this.name = 'health';
    this.value = 20;
  };