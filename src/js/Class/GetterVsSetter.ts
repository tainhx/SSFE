let passcode = 'secret passcode';

class Employee {

    public get fullName(): string {
        return this._fullName;
    }

    public set fullName(value: string) {
        if (passcode && passcode === 'secret passcode') {
            this._fullName = value;
        }
        else {
            console.log("Unauthorized");
        }
    }
    private _fullName: string;
}

let employee = new Employee();
employee.fullName = "Tai Nguyen";

if (employee.fullName) {
    console.log(employee.fullName);
}