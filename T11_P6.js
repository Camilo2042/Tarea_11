var n1 = prompt("Ingresa primer numero:");
var n2 = prompt("Ingresa segundo numero:");
var n3 = prompt("Ingresa tercer numero:");
var prm = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3;
console.log("Primer numero: "+n1)
console.log("Segundo numero: "+n2)
console.log("Tercer numero: "+n3)
console.log("El promedio de los 3 es: "+parseFloat(prm).toFixed(1))