'use strict'

window.onload = init;

function init(){
    var btnCalcular = document.getElementById('btnCalcula');

    btnCalcular.addEventListener('click', function(evt){

        evt.preventDefault();

        var div = document.getElementById('infoCalculos');
        
        div.innerHTML = muestraResultados();


    }); 
}

function perimetroCircunferencia(radio){
    var perimetro = 2 * Math.PI * radio;

    return perimetro.toFixed(2);
}

function areaCirculo(radio){
    var area = Math.PI * Math.pow(radio, 2);

    return area.toFixed(2);
}

function areaEsfera(radio){
    var areaEsf = 4 * Math.PI * Math.pow(radio, 2);

    return areaEsf.toFixed(2);
}

function volumenEsfera(radio){
    var volumenEsf = (4/3) * Math.PI * Math.pow(radio, 3);

    return volumenEsf.toFixed(2);
}

function muestraResultados(){
    var numeroUsuario = document.getElementById('radio').value;

    var resultado = "";

    resultado += "Radio: " + numeroUsuario + " Diametro: " + numeroUsuario*2 + " Perimetro Circulo: " + perimetroCircunferencia(numeroUsuario) + " Area Circulo: " + areaCirculo(numeroUsuario) + " Area esfera: " + areaEsfera(numeroUsuario) + " Volumen esfera: " + volumenEsfera(numeroUsuario);

    return resultado;

    
}