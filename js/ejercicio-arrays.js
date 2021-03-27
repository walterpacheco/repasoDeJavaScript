'use strict'

/**
 * Pida 6 numero por pantalla y los meta en un array
 * Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
 * Ordenar y mistrarlo
 * Invertir su orden y mostrarlo
 * Mostrar cuantos elementos tiene el Array
 * Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
 * 
 */
// pedir 6 numeros

function mostarArray(elementos, textoCustom = "") {
    document.write("<h1>Contenido del array "+textoCustom+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
    document.write("<li>" + elemento + "</li>")
    });
}   document.write("</ul>");

let numeros = new Array(6);
for (let i = 0; i <= 5; i++) {
    numeros[i] = parseInt(prompt("Introdice un numero", 0));
}
// Mostarar en el cuerpo de la página

document.write("<h1>Contenido del array</h1>");
numeros.forEach((numero, index) => {
    document.write("<strong>" + numero + "</strong></br>")
})

// mostrar array en la consola
console.log(numeros);
// Ordenar y mostrar
numeros.sort(function(a,b){return a-b});

mostarArray(numeros,"Ordenado");
// Invertir y mostrar
numeros.reverse();
mostarArray(numeros, "revertido");

// Cuantos elementos tiene un array

//numeros.length

document.write("El array tienne un largo de "+numeros.length);

let busqueda = parseInt(prompt("Busca un numero ",0));

let posicion =numeros.findIndex(numero => numero == busqueda);
if(posicion && posicion != -1){
    document.write("<h1> ENCONTRADO</h1>");
    document.write("<h1> Posición de la busqueda: "+posicion+"</h1>");  
}else{
    document.write("<h1> No encontrado </h1>");
}
