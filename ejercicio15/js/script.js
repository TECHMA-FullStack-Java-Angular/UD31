// Asignamos una función al evento "load" del objeto window, que se ejecutará cuando la página haya cargado
window.onload = function() {

    // Capturamos todos los elementos img de la página
    const imagenes = document.getElementsByTagName("img");
  
    // Capturamos el elemento donde se mostrará la imagen grande
    const imagenGrande = document.getElementById("imagen-grande");
  
    // Capturamos el elemento donde se mostrará el pie de foto
    const pie = document.getElementById("pie-foto");
  
    // Recorremos todos los elementos img
    for (let i = 0; i < imagenes.length; i++) {
  
      // Asignamos un evento "click" a cada imagen
      imagenes[i].addEventListener("click", function() {
  
        // Cambiamos la imagen grande por la que se ha pulsado
        imagenGrande.src = this.src;
  
        // Cambiamos el pie de foto por el atributo alt de la imagen pulsada
        pie.textContent = this.alt;
  
      });
    }
  };
  
