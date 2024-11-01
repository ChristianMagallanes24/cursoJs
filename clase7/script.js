// /* ABTRACCION */
// let total = 0;

// function sumarRango(min, max){
//     for(let i = min; i <= max; i++){
//         total += i;
//     }
//     return total;
// }
// console.log(sumarRango(1, 10))

// // ejersicio de abtraccion
// function dividirParametros(n){
//     return (m) => m / n; 
// }
// let num = dividirParametros(2); // este seria por el numero que quiero dividir el parametro 'n' de la funcion
// console.log(num(14)); // y este es el valor del parametro m '14' por el cual quiero dividir entre 'n'

// function divisorNum (numero, divisor) {
//     return numero / divisor;
// }
// console.log(divisorNum(4, 4));
// console.log(divisorNum(100, 2));

// /* RETORNO DE FUNCIONES */

// function mayorQue (x) {
//     return (num) => num > x;
// }
// const mayorQueDiez = mayorQue(10); // guardo en una variable la funcion y le asigno el valor
// console.log(mayorQueDiez(20)); // este es el valor de num
// console.log(mayorQueDiez(5));

// // const mayorQueDiez = (num) => num > 10;
// // console.log(mayorQueDiez(10));




// METODOS DE BUSQUEDA Y TRANSFORMACION //

const numeros = [10, 12, 20, 43];

const animales = ["perro", "caballo", "tigre", "gato"];

const productos = [
    {nombre: "mesa", precio: 2000},
    {nombre: "pc", precio: 15000},
    {nombre: "monitor", precio: 4000},
    {nombre: "puerta", precio: 1900},
    {nombre: "silla", precio: 500},
    {nombre: "silla", precio: 400},
];

// foreEach() => recorrer el arr y ejecuta lo que le digamos a cada elemento
//nombre de array //elemento del array
// numeros.forEach((numero) => {
//     console.log(numero);
// });
// productos.forEach((producto) => {
//     console.log(producto.nombre);
// })

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// find() => recorrer el arr y retorna el primer elemento que cumpla con una condicion

// const perro = animales.find((animal) => {
//    return animal === "perro";
// });
// console.log(perro)

// let productoElegido = prompt("ingrese el producto que quiere comprar");
// console.log( productos.find((producto) => producto.nombre === productoElegido) );

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// filter() => recorre un arr y retorna un nuevo arr con todos los elementos que cumplan con una condicion

// const perro = animales.filter((animal) => {
//    return animal === "perro";
// });
// console.log(perro)

// const sillas = productos.filter((producto) => {
//    return producto.nombre.includes("silla")
// });

// console.log(sillas)

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// some() => Recorre el arr y responde true o false segun si encuentra o no un elemento que cumpla con una condicion

// const gato = animales.some((animal) => animal === "gato");
// console.log(gato) // true esta en el arr

// const elefante = animales.some((animal) => animal === "elefante");
// console.log(elefante) // false no esta en el arr

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


// map() => Recorre el arr y retorna un nuevo arr con los elementos transformados del arr original

// const nombres = productos.map((producto) => producto.nombre);
// console.log(nombres)

// const preciosActualizados = productos.map((producto) => {
//     return {
//         nombre: producto.nombre,
//         precio: producto.precio * 1.5
//     }
// });

// console.log(productos)
// console.log(preciosActualizados);

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// reduce() => recorre el arr y retorna un unico valor tras hacer una operacion sobre los elementos

// const total = numeros.reduce((acumulador, numero) => acumulador + numero, 0 );
// console.log(total);

// const resultadoTotal = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
// console.log(resultadoTotal);

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// sort() => reordenar el arr segun el criterio que le indiquemos
// numeros.sort((a, b) => a - b);
// console.log(numeros)
// numeros.sort((a, b) => a + b);
// console.log(numeros)

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

//MATH //

const numeroDecimal1 = 1.25;
const numeroDecimal2 = 1.75;

// // min() => retornar el numero minimo de un listado
// console.log(Math.min(50, 12, 37, 17, 25, 6));

// // min() => retornar el numero maximo de un listado
// console.log(Math.max(50, 12, 37, 17, 25, 6));

// // ceil() => retorna el numero que le indiquemos redondeado hacia arriba
// console.log(Math.ceil(1.25));

// // floor() => retorna el numero que le indiquemos redondeado hacia abajo
// console.log(Math.floor(numeroDecimal2));

// // round() => retorna el numero que le indiquemos redondeado mas cercano
// console.log(Math.round(numeroDecimal2));

// Random() => Retorna un numero aleatorio entre 0 y 1
// console.log(Math.random());
// console.log(Math.round(Math.random()));

// console.log(Math.round(Math.random() * 50) );
// console.log(Math.round(Math.random() * 50 + 20) );