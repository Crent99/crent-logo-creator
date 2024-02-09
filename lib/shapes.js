class Triangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }

    // Method to generate SVG markup for the triangle
    generateSVG() {
        return `<polygon points="${this.base / 2},0 0,${this.height} ${this.base},${this.height}" />`;
    }
}

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // Method to generate SVG markup for the circle
    generateSVG() {
        return `<circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" />`;
    }
}

class Square {
    constructor(side) {
        this.side = side;
    }

    // Method to generate SVG markup for the square
    generateSVG() {
        return `<rect width="${this.side}" height="${this.side}" />`;
    }
}

module.exports = { Triangle, Circle, Square };
