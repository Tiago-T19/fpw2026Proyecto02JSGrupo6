
import { compararLetras } from "../services/servicesEj01.js";


const contenedorResultado = document.getElementById("resultado");

let entrada1 = prompt("Ingrese la primera letra:");
let entrada2 = prompt("Ingrese la segunda letra:");


if (!entrada1 || !entrada2) {
   
        alert("Debe ingresar ambas letras para poder realizar la comparación.");
        contenedorResultado.innerHTML = "Operación cancelada: faltaron datos.";
}else {

    let letra1 = entrada1.charAt(0);
    let letra2 = entrada2.charAt(0);
    let mensaje = compararLetras(letra1, letra2);
    contenedorResultado.innerHTML = mensaje;
}

