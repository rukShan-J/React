function add2(x) {
    return x+2;
}
function multiplyBy3(x) {
    return x*3;
}
function substract1(x) {
    return x-1;
}

// let y = substract1(5);       // call one function
let y = substract1(multiplyBy3(add2(5)));   // call all functions
console.log(y);

function compose() {
    var functions = arguments;
    return function(input) {
        var value = input;
        for(var i=0; i<functions.length; i++) {
            value = functions[i](value);
        }
        return value;
    }
}

var allInOneFunction = compose(add2,multiplyBy3,substract1);

var result = allInOneFunction(5);

console.log(result);