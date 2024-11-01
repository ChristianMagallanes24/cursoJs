// const largoArray = [
//     "Hola", "Mundo", 1, 2, "JavaScript", "es", "genial",
//     3, "programación", 4, "desarrollo", 5, "código", 
//     "array", 6, "texto",
// ];

// const arr = ["pedro", 6, "jose", "carlos", "juan", "arturo", "antonio", "pedro", "likas"]

// // agregar dato al final
// largoArray.push("soy el ultimo")
// // Agrega elemento al principio
// largoArray.unshift("soy el primero")
// // quita el primero
// largoArray.shift()
// // quita el ultimo
// largoArray.pop()
// largoArray.splice(0,2)

// //Concatena algo entre cada elemento
// console.log(largoArray.join(" - "))

// //regresa el indice del elemento
// // console.log(largoArray.indexOf("es"))

// // splice quita el dato por referencia
// arr.splice(0, 2)
// console.log(arr)

// //Slice parte, mantiene el arreglo original
// const nombres = arr.slice(1, 4);
// console.log(nombres)
// // un arr con objetos dentro
// const sexo = [{hombre: 'pedro'}, {mujer: 'claudia'}, {mujer: 'carla'}, {hombre: 'enzo'}];
// let newSexo = sexo.slice(1, 4);
// console.log(newSexo);

// //Includes, busca dendro del array el elemento y devuelve true o false dependiendo si esta o no
// const sexos = ["pedro", "rita", "jose"];
// console.log(sexos.includes('pedro'));

// //Reverse, invierte los elementos, pero modifica el arreglo
// console.log(sexos)
// console.log(sexos.reverse())
// for (let i = 0; i <= largoArray.length; i++){
//     console.log(largoArray[i])
// }

// let auto1 = {
//     marca: "bmw"
// }
// let auto2 = {
//     marca: "fiat"
// }
// let auto3 = {
//     marca: "ford"
// }

// let autos = [auto1, auto2, auto3];

// for (let i = 0; i <= autos.length; i++){
//     console.log(autos[i].marca)
// }

// INGRESAR DATOS A UN ARRAY CON ENTRADA

// const cantidad = prompt('ingrese cuantos datos quiere agregar: ');
// let arrow = [];
// for (let i = 0; i< cantidad; i++){
//     arrow[i] = prompt('ingrese un numero');
// }
// console.log(arrow)

// let ingreso;
// let arroww = [];
// let i = 0;
// do {
//     arroww[i] = prompt('ingrese dato');
//     ingreso = prompt('diga si si quieres eguir agregando');
//     i++;
// }while(ingreso === 'si');
// console.log(arroww)



// const productos = [
//     {id: 1, producto: "moto"},
//     {id: 2, producto: "auto"},
//     {id: 3, producto: "lechuga"},
//     {id: 4, producto: "avion"},
// ];

// for (const producto of productos){
//     console.log('vehiculo: ' + producto.id + ' es ' +  producto.producto)
// }

class Productos {
    // constructor, usa this
    constructor(tipo) {
        this.tipo = tipo;
    }
//metodo
    vender() {
        console.log(`Producto ${this.tipo} vendido`);
    }
}

// constructor de objetos a base de una clase
const auto = new Productos("auto");
const moto = new Productos("moto");
const celular = new Productos("celular");
//creacion de arr con objetos dentro
const productos = [celular, moto, auto,]

// CICLO REPETITIVO PARA LEER CADA ELEMENTO DEL ARRAY
for (const producto of productos){
    producto.vender()
}

// metodos
// length: averigua la longitud, push y unshift: agrega , shift, pop, splice: quitar, join: juntar, concat: combinar, slice: cortar, indexOf: obtener indice, includes: verifica existencia, reverse: invertir orden.