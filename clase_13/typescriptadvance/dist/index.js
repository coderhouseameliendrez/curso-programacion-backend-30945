"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const operaciones = __importStar(require("./lib/operaciones"));
const mensaje = 'Hola Coders!';
console.log(mensaje);
let num1 = 15, num2 = 6;
console.log(`la suma de ${num1} más ${num2} es ${operaciones.sumar(num1, num2)}`);
console.log(`la resta de ${num1} menos ${num2} es ${operaciones.restar(num1, num2)}`);
console.log(`la multiplicacion de ${num1} por ${num2} es ${operaciones.multiplicar(num1, num2)}`);
console.log(`la division de ${num1} divido ${num2} es ${operaciones.dividir(num1, num2)}`);
