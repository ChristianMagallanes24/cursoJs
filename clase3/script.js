

// For (desde; hasta; catualizacion) {
// for (var x = 0; x < 10; x++) {
//     console.log(x)
// }

// console.log("///////////////////////")


// for (var z = 0; z < 10; z++){
//     if(z == 5){
//        console.log("soy el 5")
//     } else{
//         console.log(z)
//     }
// }





// Break mata el bucle
// continue continua el bucle pero deja de contar hasta donde programemos y continua 

// let numero = parseInt(prompt("ingrese su numero"));

// for (var x = 0; x <= numero; x++) {
   
//     if (x == 5) {
//         continue;
//      } else {
//         console.log("tu turno " + x);
//      }
// }

// let numero = parseInt(prompt("ingrese su numero"));

// for (var x = 0; x <= numero; x++) {
   
//     if (x == 5) {
//         break;
//      } else {
//         console.log("tu turno " + x);
//      }
// }




//while tiene la variable fuera, mientras que la condicion se cumpla, se ejcuta el while

// bucle while , mientras que (condicion)
// let numero = parseInt(prompt("ingrese numero par"))
//      // condicion
// while(numero < 5){
//   numero++
//   console.log(numero)
// }


//bucle do while
// se ejecuta primero y despues pregunta
// do{
//     numero++;
//     console.log(numero)
// } while(numero <= 5)


// Switch
// let datos = prompt("dime tu nombre y te mostrare tus datos: ")

// switch (datos) {
//     case "jorge": {
//         document.write("tu nombre es jorge, tienes 25 anios")
//     };
//     case "martin" : {
//         document.write("tu nombre es martin ajaja")
//     };
//     case "rodolfo" : {
//         document.write("tu nombre es rodolfo y el orto te parto ekisde")
//     }

//     default : {
//         document.write("ingresa un nombre correcto")
//     }
    
// }
 




/////////Practica//////////////
// for //

//#1 Imprimir en la consola del 1 al 10
// for (let i = 0; i <= 5; i++) {
//     console.log("soy el for " + i);
// };

// //#2 Crea un arreglo con algunos numeros y utiliza el bucle for
// // para calcular la suma de esos numeros y mostrar el resultado en la consola.

// // while //
// let numero = 0;
// while (numero <= 10){
//     numero++;
//     console.log("soy el while "+ numero)
   
// }
// //do while
// let numeero = 0;
// do{
// numeero++
// console.log("soy el num do while " + numeero);
// } while(numero < 8 );



// iterar sobre un arreglo
// let nombres = [
//     "christian",
//     "david",
//     "jorge",
//     "pepe"
// ]
// //op 1
// for (let i = 0; i < nombres.length; i++) {
//     console.log("este es un nick " + nombres[i]);
// }
// op 2
// nombres.forEach(function(nombre) {
//     console.log(nombre)
// });



// for(contador = 0; contador < 11; contador++) {
//     if(contador == 11){
//         break;
//     }
//     console.log(contador)
// }

// let contador = 0;
// while(contador < 11){
//     contador++;
//     if(contador == 11){
//         break;
//     }
//     console.log(contador);
// }

// let contador = 0;
// do{
//     contador++;
//     if(contador == 11){
//         break;
//     }
//     console.log(contador)
// } while(contador < 11)

// let i = 5;
// for(let num = 1; num <= 10; num++){
//     console.log(`${i} x ${num} = ${i * num}`)
// }

// let num = 3;
// let x = 0;
// while(x <= 9){
//     x++;
//     console.log(`${x} x ${num} = ${x * num}`)
// }

// let num = 3;
// let x = 0;
// do{
//     x++;
//     console.log(`${x} x ${num} = ${x * num}`)
// } while(x <= 9)