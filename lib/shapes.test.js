// Simple tests for running this code (although had issues with this)


import { Circle, Square, Triangle } from './lib/shapes.js';

describe('Shape tests', () => {
    let color, text, textColor;

    beforeEach(() => {
        color = 'red';
        text = 'Hi';
        textColor = 'white';
    });

    test('Circle renders correctly', () => {
        const circle = new Circle(color, text, textColor);
        expect(circle.render()).toContain('circle');
        expect(circle.render()).toContain(color);
        expect(circle.render()).toContain(text);
        expect(circle.render()).toContain(textColor);
    });

    test('Square renders correctly', () => {
        const square = new Square(color, text, textColor);
        expect(square.render()).toContain('rect');
        expect(square.render()).toContain(color);
        expect(square.render()).toContain(text);
        expect(square.render()).toContain(textColor);
    });

    test('Triangle renders correctly', () => {
        const triangle = new Triangle(color, text, textColor);
        expect(triangle.render()).toContain('polygon');
        expect(triangle.render()).toContain(color);
        expect(triangle.render()).toContain(text);
        expect(triangle.render()).toContain(textColor);
    });
});
