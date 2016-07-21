interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}


class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}

//-------------------------------------------------------------

interface ClockConstructor {
     new (hour: number, minute: number); // Construct Signature ...
}

interface Clock_Inteface {
    tick();
}

function createClock(ctor: ClockConstructor, houre: number, minute: number): Clock_Inteface {
    return new ctor(houre, minute);
}

class DigitalClock implements Clock_Inteface {
    constructor(h: number, m: number) {
    }
    tick() {
        console.log('beep beep');
    }
}

class AnalogClock implements Clock_Inteface {

    constructor(h: number, m: number) {
    }
    tick() {
        console.log('tick tock');
    }
}

let digital = createClock(DigitalClock, 12, 17);
digital.tick();
let analog = createClock(AnalogClock, 10, 15);
analog.tick();

//----------------------------------------------------------

//------------------------ EXTENDING -------------------------
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square  : Square;
square.color = "blue";
square.sideLength = 10;
//-----------------------------------------------------------
