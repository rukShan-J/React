class square {
    constructor(_width) {
        this.width = _width;
        this.height = _width;
    }

    getArea() {
        console.log(this.width, this.height);
        return this.width * this.height;
    }

    get area() {        // area is like this.area that inside this.width, this.height inside the constructor
        return this.width * this.height;
    }

    set area(newArea) {
        this.width = Math.sqrt(newArea);
        this.height = Math.sqrt(newArea);
    }
}

const newSquare = new square(10);

// console.log(newSquare.getArea());
console.log(newSquare.area); // area is not call as a function

newSquare.area = 25;

console.log(newSquare.area);
console.log(newSquare.getArea());