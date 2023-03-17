// Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
let numeroIf = 10;

if (numeroIf > 0) {
  console.log("El número es positivo");
} else if (numeroIf < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es 0");
}

// Crea un bucle While, este bucle tendrá que tener como condición que la variable numeroWhile sea inferior a 3
let numeroWhile = 0;

while (numeroWhile < 3) {
  numeroWhile++;
  console.log(numeroWhile);
}

// Para el bucle Do While, deberás crear la misma estructura que en el While, pero solo se debe ejecutar una vez.
let numeroDoWhile = 0;

do {
  numeroDoWhile++;
  console.log(numeroDoWhile);
} while (numeroDoWhile < 3);

// Para el bucle For, crea una variable numeroFor, esta variable tendrá como valor 0 y su condición será que la variable sea igual o menor que 3
for (let numeroFor = 0; numeroFor <= 3; numeroFor++) {
  console.log(numeroFor);
}

// Para el Switch, deberás crear la variable estacion, y distintos case para las cuatro estaciones del año
let estacion = "otoño";

switch (estacion) {
  case "invierno":
    console.log("Es invierno");
    break;
  case "primavera":
    console.log("Es primavera");
    break;
  case "verano":
    console.log("Es verano");
    break;
  case "otoño":
    console.log("Es otoño");
    break;
  default:
    console.log("La variable no es una estación");
}
