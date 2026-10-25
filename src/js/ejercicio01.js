//funcion que me da dos letras y me dice cual es mayor o menor en el abecedario
function compararLetras(l1, l2) {
   
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