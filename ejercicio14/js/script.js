function display(val) {
    document.getElementById('result').value += val;
}

//limpia todo lo que esta en pantalla
function clearScreen() {
    document.getElementById('result').value = "";
}
/* clearEntry() utiliza una expresión regular para eliminar el último número que se haya ingresado en la pantalla.
 La expresión regular busca un número seguido opcionalmente por un punto decimal y cero o más dígitos.
  Luego, la función actualiza el valor de la pantalla con el nuevo valor sin el último número ingresado. */
function clearEntry() {
    let display = document.getElementById('result');
    let currentValue = display.value;
    let newValue = currentValue.replace(/\d+\.?\d*$/, ''); //elimina el ultimo numero completo introducido
    display.value = newValue;
}

//Elimina el ultimo digito del numero introducido
function backspace() {
    let display = document.getElementById('result');
    display.value = display.value.slice(0, -1);
}
//utilizo la función eval() de JavaScript para evaluar la expresión matemática que se encuentra en la pantalla
function solve() {
    let x = document.getElementById('result').value;
    let y = eval(x);
    document.getElementById('result').value = y;
    return y;
}

function square() {
    let x = document.getElementById('result').value;
    let y = Math.sqrt(parseFloat(x));
    document.getElementById('result').value = y;
    return y;
}

function percent() {
    let x = document.getElementById('result').value;
    let y = x / 100;
    document.getElementById('result').value = y;
    return y;
}

function reciprocal() {
    let x = document.getElementById('result').value;
    let y = 1 / x;
    document.getElementById('result').value = y;
    return y;
}

function round() {
    let x = document.getElementById('result').value;
    let y =Math.round(x);
    document.getElementById('result').value = y;
    return y;
}




