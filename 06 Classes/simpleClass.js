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

    aboutMe() {
        return `I am a rectangle and my width is ${this.width}.
        My height is ${this.height}.
        My color is ${this.color}`;
    }
}

// object
const newRectangle = new Rectangle(10, 8, 'red');
console.log(newRectangle.getArea());
console.log(newRectangle.aboutMe());

const newRectangle2 = new Rectangle(15, 10, 'yellow');
console.log(newRectangle2.getArea());
console.log(newRectangle2.aboutMe());