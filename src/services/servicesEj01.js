

export function compararLetras(letra1, letra2) {

    if (letra1 < letra2) {
        return `La letra ${letra1} está ANTES que la letra ${letra2} en el abecedario.`;
    }

    if (letra1 > letra2) {
        return `La letra ${letra1} está DESPUÉS que la letra ${letra2} en el abecedario.`;
    }

    return `Ambas letras son iguales ('${letra1}').`;
}
