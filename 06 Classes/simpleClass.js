class Rectangle {
    //when creating a object, constructor function will automatically run
    constructor(_width, _height, _color) {
        this.width = _width;
        this.height = _height;
        this.color = _color;
        console.log('A new Rectangle created.');
    }

    getArea() {
        return this.width * this.height;
    }
}

// object
const newRectangle = new Rectangle(10, 8, 'red');

console.log(newRectangle.getArea());