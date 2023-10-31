function calcularCuadradoHandler() {
    let number = parseInt(document.getElementById("number").value);
    let resultElement = document.getElementById("result");

    resultElement.textContent = calcularCuadrado(number);
}

function calcularCuadrado(number) {
    if (isNaN(number)) {
        return "Error: Ingresa un número válido.";
    } else {
        let square = number * number;
        return "El cuadrado de " + number + " es " + square + ".";
    }
}


function generarLista() {
    let listElement = document.getElementById("list");
    let fruits = ["Manzana", "Banana", "Naranja", "Piña"];

    for (let i = 0; i < fruits.length; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = fruits[i];
        listElement.appendChild(listItem);
    }
}

generarLista();

function sumar() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 + num2;
    document.getElementById("resultado").textContent = "El resultado es: " + resultado;
}
function calcularMultiplicacion() {
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);

    let multiplicacion = numero1 * numero2;

    document.getElementById("result2").textContent = "El resultado de la multiplicación es: " + multiplicacion;
}
function calcularEdad() {
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;

    let resultadoElement = document.getElementById("resultado2");

    if (fechaNacimiento === "") {
        resultadoElement.textContent = "Por favor, introduce una fecha de nacimiento válida.";
        return;
    }

    let fechaActual = new Date();
    let fechaNac = new Date(fechaNacimiento);

    if (isNaN(fechaNac)) {
        resultadoElement.textContent = "Por favor, introduce una fecha de nacimiento válida.";
        return;
    }

    let edadMilisegundos = fechaActual - fechaNac;
    let edad = Math.floor(edadMilisegundos / (1000 * 60 * 60 * 24 * 365.25));

    resultadoElement.textContent = "Tu edad es: " + edad + " años.";
}

function formatProduct() {
    let productName = document.getElementById("product").value;
    let productPrice = document.getElementById("price").value;
    let formattedProductElement = document.getElementById("formattedProduct");
  
    let formattedProduct = `Producto: ${productName}`;
    formattedProduct += `\nPrecio: $${parseFloat(productPrice).toFixed(2)}`;
  
    formattedProductElement.textContent = formattedProduct;
  }

  function cambiarColor() {
    // Accede al elemento del encabezado mediante su id
    let heading = document.getElementById("heading");
  
    // Genera un color aleatorio en formato hexadecimal
    let color = generarColorAleatorio();
  
    // Modifica el color de fondo del encabezado
    heading.style.backgroundColor = color;
  }
  
  function generarColorAleatorio() {
    // Genera valores aleatorios para los componentes RGB
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
  
    // Combina los componentes en una cadena de formato hexadecimal
    let color = "#" + red.toString(16) + green.toString(16) + blue.toString(16);
  
    return color;
  }
  