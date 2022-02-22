const Potion = require('../lib/Potion');
const Character = require('./Character');

// extends keyword brings in the inheritance from character
class Player extends Character {
    constructor(name = '') {

        // call parent constructor
        super(name);

        this.inventory = [new Potion('health'), new Potion()];
    }

    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    }

    getInventory() {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;
    }

    addPotion(potion) {
        this.inventory.push(potion);
    }

    usePotion(index) {
        const potion = this.inventory.splice(index, 1)[0];

        switch (potion.name) {
            case 'agility':
                this.agility += potion.value;
                break;
            case 'health':
                this.health += potion.value;
                break;
            case 'strength':
                this.strength += potion.value;
                break;
        }
    }
}

module.exports = Player;


/* PRE CLASS IMPLEMENTATION
function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    this.inventory = [new Potion('health'), new Potion()]; // starter potion
}


// inherit prototype methods from Character here:
// mustestablish the inheritance before assigning any other methods to prototype. 
// Otherwise, those methods will get overwritten.
Player.prototype = Object.create(Character.prototype);

// we do prototypes for methods outside of the object so they are only created once
// if they're inside the object a new set is created with every object
// When using prototype, however, you are only creating the method once on the constructor itself. 
// New player objects simply inherit the method from the constructor rather than having their own instances of that method.
Player.prototype.getStats = function () {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

Player.prototype.getInventory = function () {
    if (this.inventory.length) {
        return this.inventory;
    }
    return false;
};

// push a potion into the players inventory
Player.prototype.addPotion = function (potion) {
    this.inventory.push(potion);
};

Player.prototype.usePotion = function(index) {
    // The .splice() method removes items from an array and returns the removed item(s) as a new array.
    // Here the original inventory array has a single Potion removed at the specified index value and put into a new "removed items" array
    // then the Potion at index [0] of this "removed items" array is saved in a potion variable for use.

    //Both .push() and .splice() are methods on the Array prototype. This means that even built-in JavaScript data types are constructors themselves!
    const potion = this.getInventory().splice(index, 1)[0];

    switch (potion.name) {
        case 'agility':
            this.agility += potion.value;
            break;
        case 'health':
            this.health += potion.value;
            break;
        case 'strength':
            this.strength += potion.value;
            break;
    }
}; */


