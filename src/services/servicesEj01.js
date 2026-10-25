
export function compararLetras(l1, l2) {


    if (l1 < l2) {
        return "La letra " + l1 + " está ANTES que la letra " + l2 + " en el abecedario.";
  
    } else if (l1 > l2) {
        return "La letra " + l1 + " está DESPUÉS que la letra " + l2 + " en el abecedario.";

    } else {
        return "Ambas letras son iguales ('" + l1 + "').";
    }
}