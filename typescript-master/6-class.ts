abstract class Person {
    firstName: string;
    middleInitial: string;
    lastName: string;
    getFullName() : string {
        return this.firstName + " " + this.middleInitial + " " + this.lastName;
    }
}

class Employee extends Person {
    constructor(public firstName, public middleInitial, public lastName) {
        super();
    }
    getFullName() : string {
        return this.firstName + " " + this.lastName;
    }
}

class Greeter<T> {
    greeting : T;
    constructor(message: T) {
        this.greeting = message;
    }
    sayHello() : T {
        return this.greeting;
    }
}

function sayHello(person: Person) : string {
    return "Hello, " + person.getFullName();
}

document.body.innerHTML = new Greeter<string>("Hello Bob").sayHello();