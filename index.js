
function suma(a, b) {
    return a + b;
  }
  
  function resta(a, b) {
    if (a == null || b == null) return 0;
    return a - b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  function multiplica(a, b) {
    return a * b;
  }
  
  // 🔁 FUNCIONES DUPLICADAS 
  
  function sumaDuplicada(a, b) {
    return a + b;
  }
  
  function restaDuplicada(a, b) {
    if (a == null || b == null) return 0;
    return a - b;
  }
  
  function divideDuplicada(a, b) {
    return a / b;
  }
  
  function multiplicaDuplicada(a, b) {
    return a * b;
  }
  
  module.exports = {
    suma,
    resta,
    divide,
    multiplica,
    sumaDuplicada,
    restaDuplicada,
    divideDuplicada,
    multiplicaDuplicada
  };
  