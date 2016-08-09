

let getX = x => { return x + 1 };


let emptyFunction = () => {
    console.log('This is emtpy function');
};



//--------- Example 
// function Person(age) {
//     this.age = age
//     let self = this; // capture 'this'
//     this.growOld = function () {
//         self.age++; // use the capture 'this'
//     }
// }

var person = new Person(1);
window.setTimeout(function () {
    this.age++
}, 1000);
// setTimeout(function () { console.log(person.age); }, 2000); // 1

//---- trasnform to =>

function Person(age) {
    this.age = age
    this.growOld = () => {
        this.age++;
    }
}

//------------- Optional and Default Parameter -----------------

// function buildName(firstName: string, lastName: string) {
//     return firstName + " " + lastName;
// }

//Optional Parameter
function buildName_optional(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;

}

//Default Parameter
function buildName_default(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}


//-------------------- REST Parameter ---------------------------------
function buildName(firstname:string, ...restOfName : string[]){
    return firstname + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");



