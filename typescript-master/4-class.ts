interface Person {
    firstName: string,
    lastName: string,
    getFullName();
}

class Employee implements Person {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = this.firstName + " " + this.middleInitial + " " + this.lastName;
    }
    getFullName() {
        return this.fullName;
    }
}

function sayHello(person: Person) : string {
    return "Hello, " + person.getFullName();
}

let user = new Employee("Alain", "R", "Chautard");

document.body.innerHTML = sayHello(user);
