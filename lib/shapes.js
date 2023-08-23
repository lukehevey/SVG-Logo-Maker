class Shape {
    constructor(bgColor, text, txtColor) {
        this.bgColor = bgColor;
        this.text = text;
        this.txtColor = txtColor;
    }
    setColor(Color) {
        this.bgColor = Color;
    }
}

class Triangle extends Shape {
    constructor(bgColor, text, txtColor) {
        super(bgColor, text, txtColor);
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.bgColor}" />`
    }
}

class Circle extends Shape {
    constructor(bgColor, text, txtColor) {
        super(bgColor, text, txtColor);
    }
    render() {
        return `<circle cx="153" cy="120" r="80" fill="${this.bgColor}" />`
    }
}

class Square extends Shape {
    constructor(bgColor, text, txtColor) {
        super(bgColor, text, txtColor);
    }
    render() {
        return `<rect x="72" y="39" width="160" height="160" fill="${this.bgColor}" />`
    }
}

module.exports = { Triangle, Circle, Square }