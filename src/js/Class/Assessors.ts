//----- WITHOUT ASSESSORS

class Employee {
    fullName: string;
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}

//----------------
let passcode = "secret passcode";

class Employee_1 {
    private _fullName: string;


	public get fullName(): string {
		return this._fullName;
	}

	public set fullName(value: string) {
		this._fullName = value;
	}
   
}

let employeee = new Employee_1();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
