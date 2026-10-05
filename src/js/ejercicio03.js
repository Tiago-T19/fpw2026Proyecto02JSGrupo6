import { concatenar, compararLongitudes } from "../services/servicesEj03.js";

// Pedimos datos con ventana emergente
let ciudad = prompt("Ingrese el nombre de una ciudad:");
let pais = prompt("Ingrese el nombre de un país:");

// Usamos las funciones del service
let resultadoConcatenado = concatenar(ciudad, pais);
let comparacion = compararLongitudes(ciudad, pais);

// También mostramos en la consola
console.log("Concatenado:", resultadoConcatenado);
console.log("Caracteres en ciudad:", ciudad.length);
console.log("Caracteres en país:", pais.length);
console.log("Comparación:", comparacion);