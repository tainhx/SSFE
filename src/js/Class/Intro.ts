//------------ INTRO -------------------
class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return "Hello, " + this.greeting;
    }
}


let greeter = new Greeter("world");

//--------------- END INTRO

//--------------------- Parameter properties ---------------------
/**
 * 'Parameter properties' let you create and initialize a member in one place
 */
class Vehicle {
    constructor(private name: string) { }
    move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
//----------------------------------------------------------------