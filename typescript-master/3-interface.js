function sayHello(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "John", lastName: "Doe" };
document.body.innerHTML = sayHello(user);
