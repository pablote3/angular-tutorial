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
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
var Employee1 = /** @class */ (function (_super) {
    __extends(Employee1, _super);
    function Employee1(firstName, middleInitial, lastName) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.middleInitial = middleInitial;
        _this.lastName = lastName;
        _this.fullName = _this.firstName + " " + _this.middleInitial + " " + _this.lastName;
        return _this;
    }
    Employee1.prototype.getFullName = function () {
        return this.fullName;
    };
    return Employee1;
}(Person));
var Employee2 = /** @class */ (function (_super) {
    __extends(Employee2, _super);
    function Employee2(firstName, lastName) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        return _this;
    }
    return Employee2;
}(Person));
function sayHello(person) {
    return "Hello, " + person.getFullName();
    ;
}
var user1 = new Employee1("Alain", "R", "Chautard");
var user2 = new Employee2("Paul", "Rossotti");
document.body.innerHTML = sayHello(user1) + " <br> ";
//document.body.innerHTML = sayHello(user2) + " <br> "; 
