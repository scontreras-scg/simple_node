const suma = require('./index');

test('Suma 2 números', () => {
    expect(suma(1, 2)).toBe(3);
});
