var n1 = prompt("Ingrese primer número:");
var n2 = prompt("Ingresa segundo número:");
var n3 = prompt("Ingresa tercer número:");
console.log("Primer número: "+n1);
console.log("Segundo número: "+n2);
console.log("Tercer número: "+n3);
 if (parseFloat(n1) && parseFloat(n2) > parseFloat(n3)){
     console.log(`Menor: ${n3}`)
 }
 else if (parseFloat(n2) && parseFloat(n3) > parseFloat(n1)){
     console.log(`Menor ${n2}`)
 }
 else if (parseFloat(n3) && parseFloat(n1) > parseFloat(n2)){
     console.log(`Menor ${n2}`)
 }