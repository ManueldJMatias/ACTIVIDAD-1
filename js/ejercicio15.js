var estudiantes = [];

function agregar() {
    var nombre = document.getElementById("nombre");
    var calificacion = document.getElementById("calificacion");
    var error = document.getElementById("mensajeError");

    error.textContent = "";

    var nom = nombre.value.trim();
    var cal = calificacion.value.trim();

    if (nom === "" || cal === "" || isNaN(cal)) {
        error.textContent = "Ingresa un nombre y una calificación válida.";
        return;
    }

    estudiantes.push({ nombre: nom, calificacion: parseFloat(cal) });

    var lista = document.getElementById("listaEstudiantes");
    var li = document.createElement("li");
    li.textContent = nom + " - " + cal;
    lista.appendChild(li);

    nombre.value = "";
    calificacion.value = "";
    nombre.focus();
}

function calcular() {
    var error = document.getElementById("mensajeError");
    error.textContent = "";

    if (estudiantes.length === 0) {
        error.textContent = "Agrega al menos un estudiante.";
        return;
    }

    var suma = 0;
    var mayor = estudiantes[0];
    var menor = estudiantes[0];

    for (var i = 0; i < estudiantes.length; i++) {
        suma += estudiantes[i].calificacion;

        if (estudiantes[i].calificacion > mayor.calificacion) {
            mayor = estudiantes[i];
        }
        if (estudiantes[i].calificacion < menor.calificacion) {
            menor = estudiantes[i];
        }
    }

    var prom = suma / estudiantes.length;

    document.getElementById("promedio").value = prom.toFixed(2);
    document.getElementById("mayor").value = mayor.nombre + " (" + mayor.calificacion + ")";
    document.getElementById("menor").value = menor.nombre + " (" + menor.calificacion + ")";
}
