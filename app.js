let boton = document.getElementById("add");
let lista = document.querySelector("ul");
let inputTexto = document.getElementById("texto");

// funtion saludarConNombre(nombre) {
//     console.log(`Hola, ${nombre}!`);
// }

function addTask() {
    if (inputTexto.value !== "") {
        let nuevoItem = document.createElement("li");
        nuevoItem.setAttribute("class", "my-3");  // Añadido para tarea lista_tareas
        nuevoItem.textContent = inputTexto.value;
        lista.appendChild(nuevoItem);
        addButtonBorrar(nuevoItem);
    }
};

function addButtonBorrar(nuevoItem) {
    let buttonBorrar = document.createElement("button");
    buttonBorrar.textContent = "Borrar";
    buttonBorrar.setAttribute("class", "btn btn-primary float-start me-3"); // Añadido para tarea lista_tareas
    console.log(buttonBorrar);

    buttonBorrar.addEventListener("click", function () { 
        console.log("Borrando tarea: ", nuevoItem.textContent);
        nuevoItem.remove()
    });
    nuevoItem.appendChild(buttonBorrar);
};


boton.addEventListener("click", function () { 
    addTask();
});

inputTexto.addEventListener('keypress', function (e) {
    console.log(e.key);
    if (e.key === 'Enter') {
        addTask();
    } 
});



// let lista = document.querySelector("ul");
// let nuevoItem = document. createElement("li");
// nuevoItem.textContent = "Elemento nuevo a borrar"
// nuevoItem.setAttribute = ("data-id", "2");
// nuevoItem.addEventListener("click", function () { 
//     alert("Boton clickead");
// });
// lista.appendChild(nuevoItem);
