
const sumar = (a, b) => a + b;

const restar = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => b !== 0 ? a / b : "Error: División por cero";

function calcularOperacion(operacion) {
    var error = document.getElementById("mensajeError");
    error.textContent = "";

    var val1 = document.getElementById("numero1").value.trim();
    var val2 = document.getElementById("numero2").value.trim();

    if (val1 === "" || val2 === "" || isNaN(val1) || isNaN(val2)) {
        error.textContent = "Ingresa dos números válidos.";
        return;
    }

    var num1 = parseFloat(val1);
    var num2 = parseFloat(val2);
    var resultado;

    if (operacion === "suma") {
        resultado = sumar(num1, num2);
    } else if (operacion === "resta") {
        resultado = restar(num1, num2);
    } else if (operacion === "multiplicacion") {
        resultado = multiplicar(num1, num2);
    } else if (operacion === "division") {
        resultado = dividir(num1, num2);
    }

    document.getElementById("resultado").value = resultado;
}
