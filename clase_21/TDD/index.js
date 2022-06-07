const assert = require('assert');

class Calculadora {
    static summa(numero1, numero2) {
        return numero1 + numero2;
    }
}

function testSuma() {
    assert.equal(8, Calculadora.summa(5,3))
}

function testSumaIncorrecta() {
    assert.notEqual(2, Calculadora.summa(5,3))
}

testSuma();
testSumaIncorrecta();