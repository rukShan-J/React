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

const someAnimal = new Animal;

someAnimal.makeSound();

const tommy = new Dog;
tommy.makeSound();