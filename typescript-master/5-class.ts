abstract class Person {
    firstName: string;
    lastName: string;
    getFullName() : string {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Employee1 extends Person {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        super();
        this.fullName = this.firstName + " " + this.middleInitial + " " + this.lastName;
    }
    getFullName() {
        return this.fullName;
    }
}

class Employee2 extends Person {
    constructor(public firstName, public lastName) {
        super();
    }
}

function sayHello(person: Person) : string {
    return "Hello, " + person.getFullName();;
}

let user1= new Employee1("Alain", "R", "Chautard");
let user2 = new Employee2("Paul", "Rossotti");

document.body.innerHTML = sayHello(user1) + " <br> ";
//document.body.innerHTML = sayHello(user2) + " <br> ";