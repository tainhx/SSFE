class Greeter {
    constructor(public greeting: string, public age?: number) { }
    greet() {
        if (this.age) {
            console.log(`Hello, my name is ${this.greeting}.I'm ${this.age} years old.`);
        }
        else {
            console.log(`Hello, my name is ${this.greeting}`);
        }
    }


    static personName: string = 'Tai Nguyen';
    static sayHelloDefault() {
        console.log(`Hello ` + `${Greeter.personName}`);
    }
}


let myGreeter = new Greeter('Thor');
myGreeter.greet(); // Hello, my name is Thor

let yourGreeter = new Greeter('Iron Man', 30);
yourGreeter.greet(); // Hello, my name is Iron Man.I'm 30 years old

Greeter.sayHelloDefault(); // Hello Tai Nguyen
Greeter.personName = 'James Bond';
Greeter.sayHelloDefault(); // Hello JamesBond



