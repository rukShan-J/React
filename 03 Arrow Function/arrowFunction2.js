function add(a,b) {
    return a+b;
}
console.log(add(4,5));

const add2 = (a,b) => {
    return a+b;
}
console.log(add(2,3));

// Above function(line 6-8) can be written in one line without using the return keyword.
const add3 = (a,b) => a+b;
console.log(add3(1,9));