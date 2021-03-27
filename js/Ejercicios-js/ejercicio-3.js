'use strict'

/* 
Hacer un programa que muestre todos los numero entre dos numeros introducidos por el usuario 

*/

var numero1 = parseInt(prompt('Introduce un numero',0));
var numero2 = parseInt(prompt('Introduce un segundo numero',0));

document.write("<h1>De "+numero1+" a "+numero2+" están estos numeros :</h1>" );

if(numero1 < numero2){
    for(var i = numero1; i<=numero2; i++ ){
        document.write(i+"<br/>");
    }
}else if(numero2 < numero1){
    for(var i = numero2; i<=numero1; i++ ){
        document.write(i+"<br/>");
    }
}
