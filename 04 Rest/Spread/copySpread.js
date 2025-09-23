// ARRAY
const arr1 = [1,2,3];

// const arr2 = arr1; //whenever a change is made to arr1, a change is also made to arr2
const arr2 = [...arr1]; //Only the copied array(arr2) will be modified
arr1[0] = 18;

console.log(arr1);
console.log(arr2);

// OBJECT
const obj1 = {one:10, two:20, three:30};
const obj2 = {...obj1};
obj1['one'] = 15;

console.log(obj1);
console.log(obj2);