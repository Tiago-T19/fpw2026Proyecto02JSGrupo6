import { concatenar, compararLongitudes } from "../services/servicesEj03.js";

let ciudad = prompt("Ingrese el nombre de una ciudad:");
let pais = prompt("Ingrese el nombre de un país:");

let resultadoConcatenado = concatenar(ciudad, pais);
let comparacion = compararLongitudes(ciudad, pais);

alert(
    "Resultado: " + resultadoConcatenado +
    "\n\nCantidad de caracteres de la ciudad: " + ciudad.length +
    "\nCantidad de caracteres del país: " + pais.length +
    "\n\n" + comparacion
);

console.log("Resultado:", resultadoConcatenado);
console.log("Cantidad de caracteres de la ciudad:", ciudad.length);
console.log("Cantidad de caracteres del país:", pais.length);
console.log("Comparación:", comparacion);