/**
 * Ejercicio 10 - Convertidor de Celsius a Fahrenheit
 * 
 * Funcionalidad:
 * - Captura el valor ingresado en el campo de texto Celsius
 * - Valida que no esté vacío y sea numérico
 * - Realiza la conversión con la fórmula: F = (C × 9/5) + 32
 * - Muestra el resultado en un campo readonly
 */

function convertir() {
    // Capturar elementos del DOM
    var campoCelsius = document.getElementById("celsius");
    var campoFahrenheit = document.getElementById("fahrenheit");
    var mensajeError = document.getElementById("mensajeError");

    // Limpiar mensaje de error previo
    mensajeError.textContent = "";

    // Obtener el valor ingresado
    var valorIngresado = campoCelsius.value.trim();

    // Validación 1: Campo vacío
    if (valorIngresado === "") {
        mensajeError.textContent = "⚠️ Por favor, ingresa un valor en grados Celsius.";
        campoCelsius.focus();
        return;
    }

    // Validación 2: Valor no numérico
    if (isNaN(valorIngresado)) {
        mensajeError.textContent = "⚠️ El valor ingresado debe ser un número válido.";
        campoCelsius.focus();
        return;
    }

    // Convertir a número
    var celsius = parseFloat(valorIngresado);

    // Aplicar la fórmula: F = (C × 9/5) + 32
    var fahrenheit = (celsius * 9 / 5) + 32;

    // Mostrar el resultado con 2 decimales en el campo readonly
    campoFahrenheit.value = fahrenheit.toFixed(2) + "";

    // Animación visual en el campo resultado
    campoFahrenheit.classList.remove("resultado-animado");
    // Forzar reflow para reiniciar la animación
    void campoFahrenheit.offsetWidth;
    campoFahrenheit.classList.add("resultado-animado");
}
