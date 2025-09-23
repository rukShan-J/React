function sum(a,b,c) // parameters
{ 
    console.log(a + b + c);
}

const arr = [1,2,3];
const obj = {one:10, two:20, three:30};

sum(...arr); // arguments - take the arr values ​​one by one and pass them to the parameters

// sum(...obj);// ERROR(keys are required to access the object) - console.log(obj['one']);
sum(...Object.values(obj)); // this in-built function can access the values ​​of the object