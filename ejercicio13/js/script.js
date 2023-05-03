window.onload = function() {
    // Capturamos todos los párrafos del documento
    const paragraphs = document.getElementsByTagName("p");

    // Asignamos un evento click a cada párrafo
    for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].addEventListener("click", function() {
        console.log("Se presionó un párrafo del documento.");
      });
    }

    // Capturamos los párrafos de la segunda tabla
    const secondTableParagraphs = document.querySelectorAll("table:nth-of-type(2) p");//selecciona el segundo elemento del tipo especificado (en este caso, table) y captura todos los elementos p

    // Asignamos un evento click a cada párrafo de la segunda tabla
    for (let i = 0; i < secondTableParagraphs.length; i++) {
      secondTableParagraphs[i].addEventListener("click", function() {
        console.log("Se presionó un párrafo contenido en la segunda tabla.");
      });
    }
  };