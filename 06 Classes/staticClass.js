class Square {
    constructor(_width) {
        this.width = _width;
        this.height = _width;
    }

    getArea() {
        return this.width * this.height;
    }

    static calArea(a, b) {
        return a * b;
    }
}

const square = new Square(10);  // object

// Instance method call
console.log(square.getArea()); 

// Static method call
// Static method: can be called using the class name directly
// no need to create an object to call calArea()
console.log(Square.calArea(5, 6)); 