//------------- Boolean ------------

let isDone: boolean = false;

//---------------------------------

//---------------  Number -----------

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//----------------------------------

//---------------- String ---------------

let color: string = "blue";
color = 'red';

let age: number = 1;
let sentence: string = `Color is ${color}`;
sentence = `My age is ${age + 1}`;

//---------------------------------------


//------------------ Array ------------------

let list: number[] = [1, 2, 3];
let list_1: Array<number> = [1, 2, 3];
//-------------------------------------------


//------------------- TUPLE ----------------
/**
 * Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same
 * 
 */

// Declare a tuple type

let x: [string, number, boolean];
x = [false, 1, 'string'];

let y: Array<string | number | boolean>;
y = [false, 1, "string"];



// Initialize it incorrectly
//x = [10, "hello"]; // Error

x[3] = false;
console.log(x[3]);

x[4] = false;
x[5] = false;
console.log(x[4]);
console.log(x[5]);
console.log(x);
// x[6] = true;  // Error, 'boolean' isn't 'string | number' 
//-----------------------------------------

//--------------- ENUM ---------------------

enum Color { Red, Green, Blue };
let c: Color = Color.Green;

enum Color1 { Red = 1, Green, Blue };
let c1: Color1 = Color1.Green;

enum Color2 { Red = 1, Green = 2, Blue = 4 };
let c2: Color2 = Color2.Green;
//------------------------------------------

//------------- ANY ---------------------
/**
 * We may need to describe the type of variables that we do not know when we are writing an application. These values may come from dynamic content,
 * The 'any' type is a powerful way to work with existing JavaScript, allowing you to gradually opt-in and opt-out of type-checking during compilation. 
 */
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
let listAny: any[] = [1, true, "free"];

listAny[1] = 100;
//-----------------------------------------

//------------------- VOID -------------------
/**
 * void is a little like the opposite of any: the absence of having any type at all. 
 * You may commonly see this as the return type of functions that do not return a value
 */
function warnUser(): void {
    alert("This is my warning message");
}

//Declaring variables of type void is not useful because you can only assign undefined or null to them:
let unusable: void = undefined;
//---------------------------------------------

//------------------ TYPE ASSERTIONS ----------------------
/**
 * A type assertion is like a type cast in other languages
 */
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;


let someValue1: any = "this is a string";

let strLength1: number = (someValue1 as string).length;
//----------------------------------------------------------

