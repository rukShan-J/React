class square {
    constructor(_width) {
        this.width = _width;
        this.height = _width;
    }

    getArea() {
        return this.width * this.height;
    }
}

const newSquare = new square(10);

console.log(newSquare.getArea());