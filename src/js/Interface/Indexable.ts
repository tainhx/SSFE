/**
 * There are two types of supported index signatures: string and number. 
 * It is possible to support both types of indexers, 
 * but the type returned from a numeric indexer must be a subtype of the type returned from the string indexer
 */

interface Dictionary {
    [index: number]: string;
    [index: string]: any;
}

let dicNumber: Dictionary;
dicNumber = ["Bob", "Alice"];

let dicString: Dictionary;
dicString = {
    a: "Bob",
    b: "Alice"
}

var normalObj = {
    a: "Bob",
    b: "Alice",
}

console.log(dicNumber[0]);
console.log(dicNumber["0"]);

console.log(dicString["a"]);
// console.log(dicString.a);

console.log(normalObj["a"]);
console.log(normalObj.a);
//-----------------------------------------------



