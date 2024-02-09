class shape
{
    constructor()
    {
        this.name = "Shape";
    }
}

class circle extends shape
{
    constructor()
    {
        super();
        this.name = "Circle";
    }
    draw()
    {
        return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
}

class triangle extends shape
{
    constructor()
    {
        super();
        this.name = "Triangle";
    }
    draw()
    {
        return `<polygon points="150,50 100,150 200,150" fill="${this.color}" />`;
    }
}

class square extends shape
{
    constructor()
    {
        super();
        this.name = "Square";
    }
    draw()
    {
        return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
    }
}

module.exports = { shape, circle, triangle, square };