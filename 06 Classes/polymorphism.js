class Animal {
    constructor() {
        console.log("An animal is created.");
    }

    makeSound() {
        console.log('Animal generally make sounds.');
    }
}

class Dog extends Animal{
    constructor() {
        super();        // Calls the Animal constructor
        console.log('A dog is created.');
    }
    makeSound() {
        console.log('Dogs normally bark');
    }
}

class Cat extends Animal {
    constructor() {
        super();
        console.log('A dog is created.');
    }
    makeSound() {
        console.log('Meow...');
    }
}

const someAnimal = new Animal;

someAnimal.makeSound();

const tommy = new Dog;
tommy.makeSound();

const lassy = new Cat;
lassy.makeSound();