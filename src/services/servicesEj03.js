// Función para concatenar ciudad y país
function concatenar(ciudad, pais) {
    return ciudad + ", " + pais;
}

// Función para comparar longitudes
function compararLongitudes(ciudad, pais) {
    if (ciudad.length > pais.length) {
        return "La ciudad es más larga que el país.";
    } else if (pais.length > ciudad.length) {
        return "El país es más largo que la ciudad.";
    } else {
        return "Ambos tienen la misma cantidad de caracteres.";
    }
}

// Exportamos las funciones (para que script.js las use)
export { concatenar, compararLongitudes };