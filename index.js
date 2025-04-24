
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
  

  function vulnerableEval(input) {
    console.log('Hola ' + input);
  }
  
  function bugRedefinicion() {
  let number = 10;
  return number;
  }
  
  function comparacionInsegura(a, b) {
    if (a == b) {
      return true;
    }else{
      return false;
    }
  }
  
  function accesoInseguro(obj) {
    return obj?.nombre?.length ?? 0;
  }
  
  
  module.exports = {
    suma,
    resta,
    divide,
    multiplica,
    vulnerableEval,
    bugRedefinicion,
    comparacionInsegura,
    accesoInseguro
  };
  
