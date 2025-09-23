// combine arrays
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [...arr1, ...arr2];

console.log(arr3);

// combine objects
const obj1 = {first:20, second:20};
const obj2 = {third:30, fourth:40};
const obj3 = {...obj1, ...obj2};

console.log(obj3);