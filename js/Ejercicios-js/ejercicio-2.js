'use strict'

/* Utilizando un bucle, mostrar la suma y la media de los numeros introducidos 
hasta introducir un mumero negativo h ahí mostar el resultado
*/

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt('Introduce numeros hasta que metas uno negativo',0));
    if(isNaN(numero)){
        numero = 0;
    }else if(numero >=0){
        suma += numero;
        contador++;

        console.log('Hola Soy suma = ',suma);
        console.log('Soy contador',contador);
    }
} while(numero >= 0)

alert("La suma de todos los numeros es: "+suma);
var media = suma / contador
alert("La media de los numero es: "+ media);