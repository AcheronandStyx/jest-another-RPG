// these four protypes are shared by Player and Enemy objects.
// So they are defined as base character object and Player and 
// Enemy inherit these so we don't have to code them multiple times.

class Character {
    constructor(name = '') {
        this.name = name;
        this.health = Math.floor(Math.random() * 10 + 95);
        this.strength = Math.floor(Math.random() * 5 + 7);
        this.agility = Math.floor(Math.random() * 5 + 7);
    }

    // are they alive?
    isAlive() {
        if (this.health === 0) {
            return false;
        }
        return true;
    }

    getHealth() {
        return `${this.name}'s health is now ${this.health}!`;
    }

    getAttackValue() {
        const min = this.strength - 5;
        const max = this.strength + 5;

        return Math.floor(Math.random() * (max - min) + min);
    }

    reduceHealth(health) {
        this.health -= health;

        if (this.health < 0) {
            this.health = 0;
        }
    }
};
module.exports = Character;