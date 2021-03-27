'use stricrt'

// Arrays, Arreglos, Matrices

var nombre = "Victor Robles;"
var nombres = ["Victor Robles","Walter Pacheco", "Juan Lopez", "Manolo Garcia", "Jose Martine", 52 , true];

var lenguajes = new Array("PHP","JS","GO","JAVA" , "PASCAL", "C");
/* console.log(nombres.length);

console.log(lenguajes[2]) */

/* var elemento = parseInt(prompt("Que elemento del array quieres",0));

if(elemento >= nombres.length){
    alert("Introduce el numero correcto, menor que "+nombres.length); 
}else{
    alert("El usuario seleccionado es: "+nombres[elemento]);
} */

//alert(nombres[elemento]);

document.write("<h1>Lenguajes de programacion del 2018 </h1>");
document.write("<ul>");
/* for(let i = 0; i < lenguajes.length;i++){
    document.write(`<li>${lenguajes[i]}</li>`);
} */


/* lenguajes.forEach((elemento, index) =>{
    document.write("<li>"+index+" "+elemento+"</li>");
}); */
for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}
document.write("</ul>");

/* var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == "PHP"
}) */
var precios = [10,20,30,40,50];

//var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP");
var busqueda = precios.some(precios => precios < "10");
// Some nos permite a buscar o comparar numeros 0 cosas y retorna true o false
document.write(busqueda);