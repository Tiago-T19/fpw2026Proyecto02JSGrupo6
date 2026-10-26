import { calcularAreaTriangulo } from "../services/servicesEj02.js";

let base = parseFloat(prompt("Ingrese la base del triángulo:"));
let altura = parseFloat(prompt("Ingrese la altura del triángulo:"));

if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {

    alert("Ingrese valores válidos.");

} else {

    let area = calcularAreaTriangulo(base, altura);

    alert(`El área del triángulo es: ${area}`);
}




