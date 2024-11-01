    // const auto = {
    //     marca: "BMW",
    //     color: "Negro",
    //     anio: 2000,

    // }

    // const pc = {
    //     marca: "intel",
    //     color: "blanco",
    //     precio: 5000,

    // }

    // const carrito = {
    //     item1 : auto,
    //     item2 : pc,
    //     item: {
    //         algo: "pene",
    //         grande: "22cm"
    //     }

    // }

    // const usuarios = {
    //     user1: {
    //         edad: 24,
    //         localidad: "uruguay"
    //     },
    //     user2:{
    //         edad: 254,
    //         localidad: "arg"
    //     }
    // }
    // usuarios.user1.altura = 1.81;
    // console.log("hola " + auto.color + " " + auto.anio)
    // console.log(carrito)
    // console.log(usuarios)

 // constructor para objetos
    function Auto(nombre, precio, color) {
        this.nombre = nombre;
        this.precio = precio;
        this.color = color;

        this.pais = function () {
            this.pais = "uruguay"
        }
    }
// nuevos objetos
    const auto1 = new Auto("bmw", 2000, "rojo");
    const auto2 = new Auto("bmw", 2000, "rojo");
    const auto3 = new Auto("bmw", 2000, "rojo");
    const autos = auto1 + auto2 + auto3;
for (x in auto1) {
    console.log(x)
}
for (l in auto2){
    if(l == "nombre"){
        console.log("modificado")
    }
}
  
 class Persona{
    constructor(nombre, edad, altura){
        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
    }
    saludar(){
        console.log("hola soy" + persona1.nombre)
    }
}

let persona1 = new Persona("magallanes", 24, 1.81);
console.log(persona1)















































class Persona {
    constructor(nombre, edad, altura, peso){
        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
        this.peso = peso;
    }
}

