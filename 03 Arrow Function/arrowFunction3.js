function add(a,b,c) {
    return arguments;
}
console.log(add(10,20,30));

//ERROR - Arrow function cannot return the arguments keyword.
// const add2 = (a,b,c) => {
//     return arguments;   
// }
// console.log(add2(15,25,35));