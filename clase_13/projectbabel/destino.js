"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lista = [1, 2, 7, 5];

var getEdad = function getEdad(edad) {
  console.log("La edad es ".concat(edad));
};

lista.map(function (x) {
  return x * x;
}).forEach(function (x) {
  return console.log(x);
});
var edad = 29;
getEdad(edad);

var Persona = /*#__PURE__*/_createClass(function Persona(nombre) {
  _classCallCheck(this, Persona);

  this.nombre = nombre;
});
