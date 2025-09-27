// ARRAY
const arr1 = [1,2,3,4,5,];

// const a = arr1[0];
// const b = arr1[1];
// Instead of substituting variables individually like above(lines-5,6), substituting variables in a single line like below(line-8)

const [first,second,...rest_argumenst] = arr1;

// console.log(a,b);

console.log(first);
console.log(second);
console.log(rest_argumenst);

//OBJECT
const obj1 = {one:10, two:20, three:30};

const {one:x,two,...rest_obj} = obj1;

// console.log(one);
console.log(x);     //Instead of the variable name one, give x and get the value of x.
console.log(two);
console.log(rest_obj);