class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
        console.log('A new person created.');
    }
}

class Programmer extends Person {
    constructor(_name, _age, _language){
        super(_name, _age);         // Calls the parent constructor
        this.language = _language;  // Adds a new property
    }

    code() {
        return `${this.name} is a programmer & knows ${this.language}.`
    }
    
}

const john = new Person('John', 32);
const jane = new Programmer('Jane', 28, 'JavaScript');

console.log(jane.code());