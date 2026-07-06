var manejarTareas = (function () {

    function obtenerTareas() {
        var datos = localStorage.getItem("tareas");
        if (datos === null) {
            return [];
        }
        return JSON.parse(datos);
    }

    function agregarTarea(texto) {
        var tareas = obtenerTareas();
        tareas.push(texto);
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }

    function eliminarTarea(indice) {
        var tareas = obtenerTareas();
        tareas.splice(indice, 1);
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }

    return {
        agregar: agregarTarea,
        eliminar: eliminarTarea,
        obtener: obtenerTareas
    };
})();

function renderizarTareas() {
    var lista = document.getElementById("listaTareas");
    lista.innerHTML = "";

    var tareas = manejarTareas.obtener();

    for (var i = 0; i < tareas.length; i++) {
        var li = document.createElement("li");

        var span = document.createElement("span");
        span.textContent = tareas[i];

        var btn = document.createElement("button");
        btn.textContent = "Eliminar";
        btn.className = "btn-eliminar";

        btn.onclick = (function (indice) {
            return function () {
                var confirmar = confirm("¿Seguro que quieres eliminar esta tarea?");
                if (confirmar) {
                    manejarTareas.eliminar(indice);
                    renderizarTareas();
                    alert("Tarea eliminada correctamente.");
                }
            };
        })(i);

        li.appendChild(span);
        li.appendChild(btn);
        lista.appendChild(li);
    }
}

function agregar() {
    var error = document.getElementById("mensajeError");
    error.textContent = "";

    var input = document.getElementById("inputTarea");
    var texto = input.value.trim();

    if (texto === "") {
        error.textContent = "Escribe una tarea antes de agregar.";
        return;
    }

    manejarTareas.agregar(texto);
    input.value = "";
    renderizarTareas();
}

renderizarTareas();
