// Compara dos letras y devuelve un mensaje
export function compararLetras(l1, l2) {

    //se lee como "si l1 es menor que l2"
    if (l1 < l2) {
        return "La letra " + l1 + " está ANTES que la letra " + l2 + " en el abecedario.";
    //se lee como "si l1 es mayor que l2"
    } else if (l1 > l2) {
        return "La letra " + l1 + " está DESPUÉS que la letra " + l2 + " en el abecedario.";
    //si no se cumple ninguna de las condiciones anteriores, significa que son iguales
    } else {
        return "Ambas letras son iguales ('" + l1 + "').";
    }
}