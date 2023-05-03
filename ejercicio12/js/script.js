
/*-------------------------------------------------------
---------------------- PRIMER PUNTO ---------------------
---------------------------------------------------------*/

//Expresión regular para validar una fecha en formato "XX/XX/XXXX":
const fechaRegex = /^\d{2}\/\d{2}\/\d{4}$/;

//cadena por probar
const cadena = "Nací el 05/04/1982 en Donostia.";

// Buscamos la primera ocurrencia de una fecha en formato "XX/XX/XXXX"
const fechaEncontrada = cadena.match(/\d{2}\/\d{2}\/\d{4}/);

if (fechaEncontrada !== null) {
  const fecha = fechaEncontrada[0]; // Extraemos la fecha encontrada
  console.log(fechaRegex.test(fecha)); // true
} else {
  console.log("No se encontró una fecha en la cadena.");
}

/*-------------------------------------------------------
--------------------- SEGUNDO PUNTO ---------------------
---------------------------------------------------------*/

//Expresion regular para validar email( los valores antes de la @ pueden contener cualquier carácter alfanumérico, 
//y los caracteres . y -, mientras que los valores traz la @ pueden contener caracteres alfanuméricos, y el tipo 
//de dominio puede tener una longitud de 2 o 3 caracteres)
const emailRegex = /^[\w.-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
console.log(emailRegex.test("example.email-123@gmail.com")); //true

/*-------------------------------------------------------
---------------------- TERCER PUNTO ---------------------
---------------------------------------------------------*/

function escapeHTML(text) {
    const replacements = [
      ["&", "&amp;"],
      ["\"", "&quot;"],
      ["<", "&lt;"],
      [">", "&gt;"]
    ];
  
    replacements.forEach(replace => {
      const regex = new RegExp(replace[0], "g"); // "g" significa que se buscará en toda la cadena
      text = text.replace(regex, replace[1]);
    });
  
    return text;
  }
  
  //probamos la función
  let prueba = "<p>Este es un ejemplo de texto con caracteres especiales: & ' \" < ></p>";
  console.log(escapeHTML(prueba));
  

/*-------------------------------------------------------
---------------------- CUARTO PUNTO ---------------------
---------------------------------------------------------*/

const nombreCompleto = "John Smith";

//Hacemos la expresion regulaar de nombre y apellido
const regex = /^(\w+)\s(\w+)$/;

const nuevoNombre = nombreCompleto.replace(regex, "$2, $1"); //indica que el contenido del segundo grupo de 
//captura (el apellido) debe ir primero, seguido de una coma y un espacio en blanco, y luego el contenido 
//del primer grupo de captura (el nombre)

console.log(nuevoNombre); // "Smith, John"

/*-------------------------------------------------------
---------------------- QUINTO PUNTO ---------------------
---------------------------------------------------------*/
const htmlString = "<script>alert('Hola Mundo');</script><p>Este es un párrafo</p>";

//La expresión regular busca todas las etiquetas <script> en la cadena y su contenido y las elimina.
const safeHtmlString = htmlString.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ''); //gi: indica que la expresión regular es global (g) y no distingue entre mayúsculas y minúsculas (i).

console.log(safeHtmlString);