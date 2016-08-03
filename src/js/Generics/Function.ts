function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("Tai Nguyen");
let output_1 = identity("Tai Nguyen"); // most COMMON

function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

let myIdentity: <T>(arg: T) => T = identity;
let myIdentity_1: <U>(arg: U) => U = identity;
let myIdentity_2: { <T>(arg: T): T } = identity; // object literal