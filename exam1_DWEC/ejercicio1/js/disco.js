'use strict'

function Disco(nombreDisco, grupoCantante, anioPublicacion, tipoMusica, localizacion){
    this.nombreDisco = nombreDisco || "";
    this.grupoCantante = grupoCantante || "";
    this.anioPublicacion = anioPublicacion || "";
    this.tipoMusica = tipoMusica || "";
    this.localizacion = localizacion || "";
    this.prestado = false;


    // Funcion para cambiar de posicion el disco
    this.cambiarDeEstanteria = function(nuevaPosicion){
        this.localizacion = nuevaPosicion;
    }


    // Funcion para cambiar el estado de prestado en el disco
    this.cambiarEstadoPrestado = function(prestado){

        // Compruebo si el estado de prestado es true
        if(this.prestado){

            // Si prestado es true lo asigno en false
            this.prestado = prestado;
        } else{

            // Si prestado es false lo asigno en true
            this.prestado = prestado;
        }
    }

    // Funcion para mostrar la informacion del objeto Disco
    this.muestraInfoDisco = function(){
        var resultado = "";

        resultado += "Nombre disco: " + this.nombreDisco + "\nGrupo Cantante: " + this.grupoCantante + "\nAño de publicación: " + this.anioPublicacion + "\nTipo de Música: " + this.tipoMusica + "\nLocalización: " + this.localizacion + "\nPrestado: " + this.prestado;

        return resultado;
    }

    // Creacion de getters y setters

    this.setNombreDisco = function(nuevoNombre){
        this.nombreDisco = nuevoNombre
    }

    this.getNombreDisco = function(){
        return this.nombreDisco;
    }

    this.setGrupoCantante = function(nuevoGrupo){
        this.grupoCantante = nuevoGrupo
    }

    this.getGrupoCantante = function(){
        return this.grupoCantante;
    }

    this.setAnioPublicacion = function(nuevoAnio){
        this.anioPublicacion = nuevoAnio
    }

    this.getAnioPublicacion = function(){
        return this.anioPublicacion;
    }

    this.setTipoMusica = function(nuevoTipo){
        this.tipoMusica = nuevoTipo
    }

    this.getTipoMusica = function(){
        return this.tipoMusica;
    }

    this.setLocalizacion = function(nuevaLocalizacion){
        this.localizacion = nuevaLocalizacion
    }
    
    this.setPrestado = function(prestado){
        this.prestado = prestado
    }

    this.getPrestado = function(){
        return this.prestado;
    }

    

    
}