// Sets parent class
class Shape {
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
};

// creates child classes that render shapes (circle, square, triangle)
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
    }
};

class Square extends Shape {
    render() {
        return `<rect x="75" y="40" width="140" height="140" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon angles="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Square, Triangle };