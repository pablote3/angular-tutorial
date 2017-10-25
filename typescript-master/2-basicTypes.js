var Name;
(function (Name) {
    Name[Name["John"] = 0] = "John";
    Name[Name["Jessica"] = 1] = "Jessica";
    Name[Name["Ron"] = 2] = "Ron";
    Name[Name["Lisa"] = 3] = "Lisa";
})(Name || (Name = {}));
;
for (var i = 0; i <= 3; i++) {
    document.body.innerHTML += sayHello(Name[i]) + " <br> ";
}
function sayHello(person) {
    return "Hello, " + person;
}
