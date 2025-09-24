const   arr1 = [5,5,5,5,10,15,100];

// It will only take 3 elements from the array.
// function sum(a,b,c) {
//     console.log(a+b+c);
// }

// Can take it all elements from the array
function sum(...args) {
    let sum = 0;
    for(const arg of args) {
        sum = sum + arg;
    }
    console.log(sum);
}

sum(...arr1);