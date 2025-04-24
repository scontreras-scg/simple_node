
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

  function vulnerableEval(input) {
    eval("console.log('Hola ' + input)");
  }
  
  function bugRedefinicion() {
    var x = 10;
    var x = 20;
    return x;
  }
  
  function comparacionInsegura(a, b) {
    if (a == b) {
      return true;
    }
    return false;
  }
  
  function accesoInseguro(obj) {
    return obj?.nombre?.length ?? 0;
  }
  
  
  module.exports = {
    suma,
    resta,
    divide,
    multiplica,
    sumaDuplicada,
    restaDuplicada,
    divideDuplicada,
    vulnerableEval,
    bugRedefinicion,
    comparacionInsegura,
    accesoInseguro
  };
  
