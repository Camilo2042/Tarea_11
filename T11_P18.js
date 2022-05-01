var n1 = prompt("Ingrese primer número:");
var n2 = prompt("Ingresa segundo número:");
console.log("Primer número: "+n1);
console.log("Segundo número: "+n2);
 if (parseFloat(n1) > parseFloat(n2)){
     console.log(`${n1} es mayor`)
 }
 else if (parseFloat(n2) > parseFloat(n1)){
     console.log(`${n2} es mayor`)
 }