
class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target) {
        if(target instanceof Unit) {
            target.res = target.res - this.power;
            console.log(`${this.name} has attacked ${target.name} dealing ${this.power} damage!`);
        } else {
            throw new Error("Target must be a unit!");
        }
    }
    showStats() {
        console.log(`Name: ${this.name}`);
        console.log(`Power: ${this.power}`);
        console.log(`Resilience: ${this.res}`);
    }
}

class Effect extends Card {
    constructor(name, cost, magnitude, stat) {
        super(name, cost);
        this.magnitude = magnitude;
        this.stat = stat;
    }

    use(target) {
        if(target instanceof Unit) {
            if(this.stat == "Power") {
                target.power += this.magnitude;
                console.log(`${this.stat} has been used on ${target.name}`);
            }
            else if(this.stat = "Resilience") {
                target.res += this.magnitude;
                console.log(`${this.stat} has been used on ${target.name}`);
            }
        }
        else {
            throw new Error("Target must be a unit!");
        }
    }
}

const RedBeltNinja = new Unit("Chris", 5, 6, 7);
const BlackBeltNinja = new Unit("Joe", 4, 5, 3);

const Shieldster = new Effect("Supreme Shield", 3, 4, "Resilience");
const RageAttack = new Effect("Berserk", 4, 3, "Power");


Shieldster.use(RedBeltNinja);
RageAttack.use(BlackBeltNinja);

BlackBeltNinja.showStats();
RedBeltNinja.showStats();

BlackBeltNinja.attack(RedBeltNinja);
RedBeltNinja.showStats();

