document.getElementById("btnCalcular").addEventListener("click", calcular);

function calcular() {
  const total = parseInt(document.getElementById("total").value);
  const correctas = parseInt(document.getElementById("correctas").value);
  const resultadoDiv = document.getElementById("resultado");

  if (isNaN(total) || isNaN(correctas) || total <= 0 || correctas < 0 || correctas > total) {
    resultadoDiv.textContent = "⚠️ Ingresa valores válidos.";
    resultadoDiv.style.color = "yellow";
    return;
  }

  const porcentaje = (correctas / total) * 100;
  let categoria = "";

  if (porcentaje >= 90) {
    categoria = "Excelente";
  } else if (porcentaje >= 70) {
    categoria = "Muy Bueno";
  } else if (porcentaje >= 50) {
    categoria = "Aprobado";
  } else {
    categoria = "Desaprobado";
  }

  resultadoDiv.textContent = `Porcentaje: ${porcentaje.toFixed(2)}% → ${categoria}`;
  resultadoDiv.style.color = "#fff";
}