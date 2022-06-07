let numRandom = Math.round(Math.random()*100);  

let numeroIngresado = 0;
let chances = 0; 

adivinador();

function adivinador() {
  do {
    numeroIngresado = Number(prompt("Adivina un número del 0 al 100"));
  
    if(numRandom > numeroIngresado) {
      alert("Más grande");
    }
    
    if(numRandom < numeroIngresado) {
      alert("Más pequeño");
    }
    chances++;
  
  } while(numRandom != numeroIngresado);
  
  alert("Haz ganado!! El número es " + numRandom + " - Lo has encontrado en " + chances  + " intentos");
}