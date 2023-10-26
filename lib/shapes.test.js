test('Triangle render method', () => {
    const shape = new Triangle('blue', 'ABC', 'white');
    expect(shape.render().trim()).toEqual(
        <polygon points="150,18 244,182 56,182" fill="blue" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ABC</text>
    .trim());
});

test('Circle render method', () => {
    const shape = new Circle('green', 'SVG', 'white');
    expect(shape.render().trim()).toEqual(
        <circle cx="150" cy="100" r="80" fill="green" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
    .trim());
});