// Seleccionar elementos del DOM
var campoTexto = document.getElementById("campoTexto");
var btnAgregar = document.getElementById("btnAgregar");
var lista = document.getElementById("lista");
var mensajeError = document.getElementById("mensajeError");


btnAgregar.addEventListener("click", function () {
    mensajeError.textContent = "";

    var texto = campoTexto.value.trim();


    if (texto === "") {
        mensajeError.textContent = "Escribe algo antes de agregar.";
        return;
    }


    var li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.textContent = texto;


    var btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.className = "btn btn-danger btn-sm btn-eliminar";

    btnEliminar.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(btnEliminar);
    lista.appendChild(li);

    campoTexto.value = "";
    campoTexto.focus();
});

campoTexto.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        btnAgregar.click();
    }
});
