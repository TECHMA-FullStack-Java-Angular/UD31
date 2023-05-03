
 // Inicializar el objeto de resultados vacío
let resultados = {};

// Realizar 36,000 lanzamientos de dos dados
for (let i = 0; i < 36000; i++) {
  // Lanzar dos dados y sumar los resultados
  let dado1 = Math.floor(Math.random() * 6) + 1;//número aleatorio entre 1 y 6, ambos inclusive
  let dado2 = Math.floor(Math.random() * 6) + 1;//número aleatorio entre 1 y 6, ambos inclusive
  let suma = dado1 + dado2;

  // Comprobar si la suma ya está en el objeto de resultados
  if (resultados[suma]) {
    // Si la suma ya está en el objeto, aumentar su contador en ese indece en 1
    resultados[suma]++;
  } else {
    // Si la suma no está en el objeto, agregarla con un contador de 1
    resultados[suma] = 1;
  }
}

// Mostrar los resultados de los lanzamientos
for (let suma in resultados) {
  console.log(`Número de veces que se ha obtenido la suma ${suma}: ${resultados[suma]}`);
}

