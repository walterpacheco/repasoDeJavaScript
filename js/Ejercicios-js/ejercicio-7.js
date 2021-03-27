'use strict'

// Tabla de multipicar de un numero introdicido por pantalla

var numero = parseInt(prompt("De que numero quieres la tabla?",1));
document.write(`<h1> Tabla del ${numero} </h1>`+"<br/>");
for(var c = 1;c <= 12; c++){
    document.write(`<h1> Tabla del ${c} </h1>`+"<br/>");
    for(var i = 1;i <= 12; i++){
        document.write(i+" x "+c+" = "+(i*c)+"<br/>");
    }
}