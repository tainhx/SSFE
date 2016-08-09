//----- WITHOUT ASSESSORS

// class Employee {
//     fullName: string;
// }

// let employee = new Employee();
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
//     console.log(employee.fullName);
// }

//----------------
let passcode = "secret passcode";

class Employee {
    private _fullName: string;

	public get fullAbc(): string {
		return this._fullName;
	}

	public set fullName(value: string) {
		this._fullName = value;
	}
}

let employeee = new Employee();
employeee.fullName = "Bob Smith";
if (employeee.fullAbc) {
    console.log(employeee.fullAbc);
}

