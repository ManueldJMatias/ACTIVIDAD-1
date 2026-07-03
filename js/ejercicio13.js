function verificar() {
    var edad = document.getElementById("edad");
    var resultado = document.getElementById("resultado");
    var error = document.getElementById("mensajeError");

    error.textContent = "";
    resultado.value = "";
    var valor = edad.value.trim();

    if (valor === "") {
        error.textContent = "Por favor, ingresa tu edad.";
        edad.focus();
        return;
    }

    if (isNaN(valor)) {
        error.textContent = "Ingresa un número válido.";
        edad.focus();
        return;
    }

    var edadNum = parseFloat(valor);

    if (edadNum <= 0) {
        error.textContent = "La edad debe ser un número positivo.";
        edad.focus();
        return;
    }

    if (edadNum >= 18) {
        resultado.value = "Puedes votar";
    } else {
        resultado.value = "No puedes votar";
    }
}
