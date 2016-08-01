interface Lengthwise {
    length: number;
}

// function identity<T>(arg:T):T{
//     console.log(arg.length);

//     return arg
// }
function constrantIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

