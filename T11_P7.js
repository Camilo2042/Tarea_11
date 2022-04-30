var n1 = prompt("Ingresa un numero:");
var pr = parseInt(n1) * 15 / 100;
var des = parseInt(n1) - parseInt(pr);
console.log("Valor ingresado: "+n1);
console.log("Descontando el 15% queda: "+parseFloat(des).toFixed(1));