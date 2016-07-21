/**
 *  object that acts as both a function and an object
 */

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = function (s: number) { 
        console.log(s);
    } as Counter;
    counter.interval = 123;
    counter.reset = () => { };
    return counter;
}

let counter = getCounter();
counter(10);
counter.reset();
counter.interval = 5.0;

console.log(counter);