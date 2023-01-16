'use strict'


var misDiscos = new Array(
    new Disco("Agua", "Melendi", 2002, "Rock", 6), 
    new Disco("Peces", "Anuel", 2018, "Pop", 3),
    new Disco("Atardecer", "Mora", 2022, "Punk", 2)
);

var mostrarDisco1 = misDiscos[0].muestraInfoDisco();

console.log("Información Disco 1");
console.log(mostrarDisco1);

var cambioEstanteriaDisco1 = misDiscos[0].cambiarDeEstanteria(1);

console.log("Cambio de Estanteria Disco 1");
cambioEstanteriaDisco1;

var cambioEstadoDisco2 = misDiscos[1].cambiarEstadoPrestado(true);

console.log("Cambio estado disco 2");
cambioEstadoDisco2;

for (let i = 0; i < misDiscos.length; i++) {

    
    console.log("Informacion Disco " + i);
    console.log(misDiscos[i].muestraInfoDisco()); 
}