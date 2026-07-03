function convertir() {
    var pesos = document.getElementById("pesos");
    var dolares = document.getElementById("dolares");
    var error = document.getElementById("mensajeError");

    error.textContent = "";
    var valor = pesos.value.trim();

    if (valor === "") {
        error.textContent = "Por favor, ingresa un valor.";
        pesos.focus();
        return;
    }

    if (isNaN(valor)) {
        error.textContent = "Ingresa un número válido.";
        pesos.focus();
        return;
    }

    var mxn = parseFloat(valor);
    var usd = mxn * 0.055;
    dolares.value = usd.toFixed(2);
}
