var vo = prompt("Ingresa una sola vocal:");
let voc = ["a","e","i","o","u"]
console.log("Letra ingresada: "+vo);
 if (vo.length > 1) {console.log("No es posible procesar el dato")}
 else if (voc.includes(vo)){console.log("Es una Vocal")}
 else {console.log("No es una Vocal")}