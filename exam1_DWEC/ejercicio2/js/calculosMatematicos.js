'use strict'

window.onload = init;

function init(){
    
    
    var mostrarResulado = document.getElementById('mensajePantalla');
    var btnCalcular = document.getElementById('btnOperacionMatematica');

    btnCalcular.addEventListener('click', function(evt){

        evt.preventDefault();

        var select = document.getElementById('operacionSelect').value;
        var numeroIntroducido = document.getElementById('numeroUsuario').value;

        switch(select){
            case 'potencia':
                mostrarResulado.innerHTML = opcionPotencia(numeroIntroducido);
            break;
            case 'raiz':
                mostrarResulado.innerHTML = opcionRaiz(numeroIntroducido);
            break;
            case 'redondeo':
                mostrarResulado.innerHTML = opcionRedondeo(numeroIntroducido);
            break;
            case 'trigonometria':
                mostrarResulado.innerHTML = opcionTrigonometria(numeroIntroducido);
            break;
        }
    });

    
}

function opcionPotencia(datosCalcular){
    var operacion = Math.pow(datosCalcular, 3);

    return operacion;
}

function opcionRaiz(datoCalcular){
    var operacion = Math.sqrt(datoCalcular);

    return operacion;
}

function opcionRedondeo(datoCalcular){
    var enteroProximo = Math.round(datoCalcular);
    var enteroMasAlto = Math.ceil(datoCalcular);
    var enteroMasBajo = Math.floor(datoCalcular);

    var redondeo = new Array(enteroProximo, enteroMasAlto, enteroMasBajo);

    return redondeo;
}

function opcionTrigonometria(datoCalcular){
    var seno = Math.sin(datoCalcular);
    var coseno = Math.cos(datoCalcular);
    var tangente = Math.tan(datoCalcular);

    var trigonometria = new Array(seno, coseno, tangente);

    return trigonometria;
}