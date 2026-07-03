function convertir() {
    var kilometros = document.getElementById("kilometros");
    var millas = document.getElementById("millas");
    var error = document.getElementById("mensajeError");

    error.textContent = "";
    var valor = kilometros.value.trim();

    if (valor === "") {
        error.textContent = "Por favor, ingresa un valor.";
        kilometros.focus();
        return;
    }

    if (isNaN(valor)) {
        error.textContent = "Ingresa un número válido.";
        kilometros.focus();
        return;
    }

    var k = parseFloat(valor);
    var m = k * 0.621371;
    millas.value = m.toFixed(5);
}
