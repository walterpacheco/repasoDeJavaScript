'use strict'
/*

Muerte todos los numeros divisores de un numero introduce en prompt
*/



var numero = parseInt(prompt("Mete un numero", 1));

for(var i = 1;i <= numero;i++){
    if(numero%i == 0){
        console.log( `en numuero que introduciste es ${numero} y el  divisor es: ` + i);
    }
}