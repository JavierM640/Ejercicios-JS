'use strict'

function numeroPaises(arrDatos){
    return arrDatos.length;
}

function mostrarPaises(arrDatos){
    return arrDatos;
}

function paisesInvertidos(arrDatos){
    var paisesInvert = arrDatos.reversed;

    return paisesInvert;
}

function paisesOrdenados(arrDatos){
    var paisesOrd = arrDatos.sort();

    return paisesOrd;
}

function anadeInicio(arrDatos){
    var anadirIni = arrDatos.unshift("Alemania");

    return anadirIni;
}

function anadeFinal(arrDatos){
    var anadirFinal = arrDatos.push("España");

    return anadirFinal;
}

function borrarPrincipio(arrDatos){
    var borrarPrinc = arrDatos.shift();

    return borrarPrinc;
}

function borrarFinal(arrDatos){
    var borrarF = arrDatos.pop();

    return borrarF;
}