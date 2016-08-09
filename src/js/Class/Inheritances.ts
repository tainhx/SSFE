//-------------- INHERITANCE ---------------------
class Animal {
    name: string;
    constructor(theName: string) { 
        this.name = theName; 
    }
    move(away: number = 0) {
        console.log(`${this.name} moved ${away}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(away = 5) {
        console.log("Slithering...");
        super.move(away);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(away = 45) {
        console.log("Galloping...");
        super.move(away);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
//-------------- END INHERITANCE ---------------------