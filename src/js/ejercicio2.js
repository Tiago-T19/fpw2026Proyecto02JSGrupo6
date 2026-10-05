import {calcularAreaTriangulo} from "../services/servicesEj02.js";

const inputBase = document.getElementById('base');
const inputAltura = document.getElementById('altura');
const btnCalcular = document.getElementById('btnCalcular');
const textoResultado = document.getElementById('resultado');

btnCalcular.addEventListener('click', () => {
    const base = parseFloat(inputBase.value);
    const altura = parseFloat(inputAltura.value);

console.log("Base:", base);
console.log("Altura:", altura);

    if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
        textoResultado.innerText = 'Por favor, ingrese valores numéricos válidos mayores a 0.';
        return;
    }

       const area =
        calcularAreaTriangulo(base,altura);

    console.log("Área:", area);

    textoResultado.innerText = `El área del triángulo es: ${area}`;
});






