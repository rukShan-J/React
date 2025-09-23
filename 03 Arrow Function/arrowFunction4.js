this.name = "Shan";

const obj1 = {
    name : 'John',
    normalFunction: function() {
        console.log(this.name);
    },
    arrowFunction : () => {
        console.log(this.name);
    }

}

console.log(this.name);

obj1.normalFunction();
obj1.arrowFunction();