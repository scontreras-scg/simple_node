
const { suma, resta, divide, multiplica } = require('./index');

describe('Funciones matemáticas (con bugs)', () => {

  test('suma() funciona con dos valores', () => {
    suma(1, 2);
  });

  test('resta() funciona con dos valores', () => {
    resta(5, 3);
  });

  test('divide() funciona con dos valores', () => {
    divide(10, 2);
  });

  test('multiplica() funciona con dos valores', () => {
    multiplica(3, 2);
  });

});