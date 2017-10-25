var Employee = /** @class */ (function () {
    function Employee(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = this.firstName + " " + this.middleInitial + " " + this.lastName;
    }
    Employee.prototype.getFullName = function () {
        return this.fullName;
    };
    return Employee;
}());
function sayHello(person) {
    return "Hello, " + person.getFullName();
}
var user = new Employee("Alain", "R", "Chautard");
document.body.innerHTML = sayHello(user);
