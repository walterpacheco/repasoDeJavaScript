'use strict'

/*
Que nos diga si un numero es o impar.
1. Venta promt
2.Si ni es valido que nos pida de nuevo el numero
*/


var number = parseInt(prompt("Introduce un numero", 0));
while(isNaN(number)){
    var number = parseInt(prompt("Introduce un numero", 0));
}
if(number % 2 ==0){
    alert("Es un numero par");
}else{
    alert("Es impar");
}