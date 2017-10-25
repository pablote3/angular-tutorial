function sayHello(data: number[]) : string {
    var result = "";
    for (var i in data) {
        result += data[i] + " ";
    }
    return "Hello, " + result;
}

var user : number[]  = [1, 2, 3];

document.body.innerHTML = sayHello(user);
