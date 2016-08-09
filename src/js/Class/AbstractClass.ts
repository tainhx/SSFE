abstract class Department {

    constructor(public name: string) {
    }

    abstract printMeeting(): void;
}

class AccountingDepartment extends Department {

    constructor() {
        super("Accounting and Auditing");
    }

    printMeeting(): void {
        console.log("Begin at 10am.");
    }
}

let department: Department; // ok to create a reference to an abstract type
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printMeeting();
