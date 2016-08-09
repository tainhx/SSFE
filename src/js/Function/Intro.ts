//Named function
// function add(x, y) {
//     return x + y;
// }

// //Anonynous function
// let doMath = function (x, y) {
//     return x + y;
// }

//Named function
// function add(x: number, y: number): number {
//     return x + y;
// }


//Anonymous function
// let doMath = function (x: number, y: number): number { 
//     return x + y 
// };

// let doMath = (x: number, y: number): number => {
//     return x + y;
// }

// declaration
let doMath: (x: number, y: number) => number;

//implemenet
doMath = function (a: number, b: number): number {
    return a + b;
}

function add(x: number, y: number): number {
    return x + y;
}

doMath = add;

