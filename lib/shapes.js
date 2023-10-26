// lib/shapes.js

class Shape {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    setColor(color) {
        this.color = color;
    }

    setText(text) {
        this.text = text;
    }

    setTextColor(textColor) {
        this.textColor = textColor;
    }

    render() {
        throw new Error("Render must be implimented");
    }
}

class Circle extends Shape {
    render() {
        return `
            <circle cx="150" cy="100" r="80" fill="${this.color}" />
            <text x="150" y="100" font-size="60" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}">${this.text}</text>
        `;
    }   
}

class Square extends Shape {
    render() {
        // Adjust to produce a square
        return `
            <rect x="50" y="50" width="230" height="230" fill="${this.color}" />
            <text x="150" y="150" font-size="60" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}">${this.text}</text>
        `;
    }
}

class Triangle extends Shape {
    render() {
        return `
            <polygon points="150,18 244,182 56,182" fill="${this.color}" />
            <text x="150" y="100" font-size="60" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}">${this.text}</text>
        `;
    }
}

export { Circle, Square, Triangle };