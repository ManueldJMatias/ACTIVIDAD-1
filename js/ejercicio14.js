function calcular() {
    var entrada = document.getElementById("numeros");
    var mayor = document.getElementById("mayor");
    var menor = document.getElementById("menor");
    var promedio = document.getElementById("promedio");
    var error = document.getElementById("mensajeError");

    error.textContent = "";
    mayor.value = "";
    menor.value = "";
    promedio.value = "";

    var texto = entrada.value.trim();

    if (texto === "") {
        error.textContent = "Por favor, ingresa al menos un número.";
        entrada.focus();
        return;
    }

    var partes = texto.split(",");
    var numeros = [];

    for (var i = 0; i < partes.length; i++) {
        var valor = partes[i].trim();

        if (valor === "" || isNaN(valor)) {
            error.textContent = "El valor \"" + partes[i].trim() + "\" no es un número válido.";
            entrada.focus();
            return;
        }

        numeros.push(parseFloat(valor));
    }

    var numMayor = numeros[0];
    var numMenor = numeros[0];
    var suma = 0;

    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] > numMayor) {
            numMayor = numeros[i];
        }
        if (numeros[i] < numMenor) {
            numMenor = numeros[i];
        }
        suma += numeros[i];
    }

    var prom = suma / numeros.length;

    mayor.value = numMayor;
    menor.value = numMenor;
    promedio.value = prom.toFixed(2);
}
