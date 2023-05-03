// Capturamos los elementos HTML en constantes
const horasElement = document.getElementById("horas");
const minutosElement = document.getElementById("minutos");
const segundosElement = document.getElementById("segundos");

// Función para actualizar las cifras de la hora, minutos y segundos
function actualizarReloj() {
  // Creamos un objeto Date para obtener la hora actual
  const hora = new Date();

  // Obtenemos las cifras de la hora, minutos y segundos
  const horas = hora.getHours().toString().padStart(2, "0"); //con tamaño de 2 digitos 0
  const minutos = hora.getMinutes().toString().padStart(2, "0");//con tamaño de 2 digitos 0
  const segundos = hora.getSeconds().toString().padStart(2, "0");//con tamaño de 2 digitos 0

  // Actualizamos los elementos HTML con las cifras correspondientes
  horasElement.textContent = horas;
  minutosElement.textContent = minutos;
  segundosElement.textContent = segundos;
}

// Ejecutamos la función actualizarReloj cada segundo
setInterval(actualizarReloj, 1000);
