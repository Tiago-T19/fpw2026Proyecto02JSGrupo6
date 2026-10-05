function reemplazarSignosPregunta(cadena) {
    let resultado = "";

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === '?') {
            const izq = parseInt(cadena[i - 1]);
            const der = parseInt(cadena[i + 1]);
            const suma = izq + der;
            resultado += suma;
        } else {
            resultado += cadena[i];
        }
    }

    return resultado;
}

const entrada = prompt("Ingrese la cadena intercalada de digitos (0-5) y '?' (ej. 3?4):");
const cadenaTransformada = reemplazarSignosPregunta(entrada);

console.log("Cadena original:", entrada);
console.log("Cadena resultante:", cadenaTransformada);