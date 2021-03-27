// Funciones son un grupo de ordenes agrupadas
/** Una función es una agrupación  reutilizable de un conjunto de instrucciones */

// defino la función
'use strict'

function porConsola(numero1, numero2){
   
   console.log("Suma : "+(numero1+numero2));
   console.log("Resta : "+(numero1-numero2));
   console.log("Multiplicacion : "+(numero1*numero2));
   console.log("Division : "+(numero1/numero2));
   console.log("*****************************");
  
   //return "Hola soy la calculadora!!";
}

function porPantalla(numero1, numero2){
   
    document.write("Suma : "+(numero1+numero2)+"<br/>");
    document.write("Resta : "+(numero1-numero2)+"<br/>");
    document.write("Multiplicacion : "+(numero1*numero2)+"<br/>");
    document.write("Division : "+(numero1/numero2)+"<br/>");
    document.write("*****************************"+"<br/>");
   
    //return "Hola soy la calculadora!!";
}

function calculadora(numero1, numero2, mostrar = false){
    if(mostrar == false){
        porConsola(numero1,numero2);
    }else{
        porPantalla(numero1,numero2);
    }
    return true
}
calculadora(4,4,true);
calculadora(4,4,false);
//Invacar a la función
//calculadora(10,15);
//calculadora(2,2);

/*
for(var i = 1;i<10;i++){
    console.log(i);
    calculadora(i,8);
}

*/