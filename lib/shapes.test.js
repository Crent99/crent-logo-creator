const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
    test('generates SVG markup for triangle', () => {
        const triangle = new Triangle(100, 50);
        const expectedSVG = '<polygon points="50,0 0,50 100,50" />';
        expect(triangle.generateSVG()).toBe(expectedSVG);
    });
});

describe('Circle', () => {
    test('generates SVG markup for circle', () => {
        const circle = new Circle(50);
        const expectedSVG = '<circle cx="50" cy="50" r="50" />';
        expect(circle.generateSVG()).toBe(expectedSVG);
    });
});

describe('Square', () => {
    test('generates SVG markup for square', () => {
        const square = new Square(100);
        const expectedSVG = '<rect width="100" height="100" />';
        expect(square.generateSVG()).toBe(expectedSVG);
    });
});
