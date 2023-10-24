const { Circle, Square, Triangle } = require('./shapes');

describe('Circle test', () => {
    test('test for a circle with a blue background', () => {
        const shape = new Circle();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="blue" />'
        );
    });
});

describe('Square test', () => {
    test('test for a square with a green background', () => {
        const shape = new Square();
        shape.setColor('green');
        expect(shape.render()).toEqual(`<rect x="75" y="40" width="140" height="140" fill="green" />`
        );
    });
});

describe('Triangle test', () => {
    test('test for triangle with a yellow background', () => {
        const shape = new Triangle();
        shape.setColor('yellow');
        expect(shape.render()).toEqual(`<polygon angles="150, 18 244, 182 56, 182" fill="yellow" />`
        );
    });
})