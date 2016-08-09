interface Function {
    (name: string, age: string): boolean;
}


let myFunction: Function;
myFunction = function (name: string, age: string) {
    let result = name.search(age);
    return result == 1;;
}

//-----------------------------------------------------------

myFunction = function (name: string, age: string): boolean {
    let result = age.search(name);
    return result == 1;;
}

//---------------------------------------------------------------

myFunction = function (name, age) {
    let result = name.search(age);
    return result == 1;
}