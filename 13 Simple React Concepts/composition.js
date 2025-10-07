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