var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.middleInitial + " " + this.lastName;
    };
    return Person;
}());
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.sayHello = function () {
        return this.greeting;
    };
    return Greeter;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, middleInitial, lastName) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.middleInitial = middleInitial;
        _this.lastName = lastName;
        return _this;
    }
    Employee.prototype.getFullName = function () {
        return "<pre>Hello\n                     " + this.firstName + " " + this.lastName + "\n                </pre>";
    };
    return Employee;
}(Person));
var user = new Employee("Alain", "R", "Chautard");
var greet = new Greeter("Hello " + user.getFullName());
document.body.innerHTML = greet.sayHello();
