const list_1 = [1,2,3].map(n => n+1);
console.log(list_1);

// To support older browsers (as the arrow function is not supported in older browsers)
const list_2 = [1,2,3].map(function(n)
{
    return n+1
});
console.log(list_2); 