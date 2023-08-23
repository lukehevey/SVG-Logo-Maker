const { Triangle, Circle, Square } = require('./shapes.js')


describe('test Triangle', () => {
    test('returns a blue triangle', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});


describe('test Circle', () => {
    test('returns a red circle', () => {
        const shape = new Circle();
        shape.setColor('red');
        expect(shape.render()).toEqual('<circle cx="153" cy="120" r="80" fill="red" />');
    });
});


describe('test Square', () => {
    test('returns a green sqaure', () => {
        const shape = new Square();
        shape.setColor('green');
        expect(shape.render()).toEqual('<rect x="72" y="39" width="160" height="160" fill="green" />');
    });
});