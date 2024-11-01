// Funciones
function saludo (){
    console.log("hola mundo!")
}
saludo()

let btn = document.getElementById("addTask");
btn.addEventListener("click", addTask)

function addTask () {
    let add = prompt("agrega tu tarea")
    document.write(`tareas: ${add} <br>`)
}


function sumar (a,b) {
    let resultado = a + b
    console.log(resultado)
}
sumar(12,4)

let miFuncion = function (a,z) {
  let resultadodos =  a + z
    console.log(resultadodos)
}
miFuncion(1,1)
// Funciones anonimas



// Funciones flecha
let miFuncio = (b,x) => {
    let res = b + x;
    console.log(res)
}
miFuncio(10,10);

// Scope




// Variables globales y locales



