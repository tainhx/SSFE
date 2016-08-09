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
var passcode = "secret passcode";
var Employee = (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullAbc", {
        get: function () {
            return this._fullName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "fullName", {
        set: function (value) {
            this._fullName = value;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employeee = new Employee();
employeee.fullName = "Bob Smith";
if (employeee.fullAbc) {
    console.log(employeee.fullAbc);
}
