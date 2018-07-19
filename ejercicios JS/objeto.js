// 3 formas de crear un objeto en JavaScript

// 1. Definir y crear un objeto simple usando un literal
var persona1 = {nombre:"Ada", apellido:"LoveLace", edad:19};

// 2. Definir t crear un objeto simple usando la plabra new

var persona2 = new Object();
persona2.nombre ="Charle";
persona2.apellido ="Babbage";
persona2.edad = "21";

//3. Definir un constructor de un objeto y crear objetos del tipo construido
function Persona (nom, ape, edad){
    this.nombre = nom;
    this.apellido = ape;
    this.edad = edad;
}

var ada = new Persona ("Ada", "LoveLace", "18");
var charle = new Persona ("Charle", "Babbage", 21);

/* This (palabra reservada):
    -Hace referencia al propietario de la función que está involucrándose
    -Hace referencia al objeto donde la función es un método.*/

    