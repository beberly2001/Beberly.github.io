function convertirFarenheit() {
    var gradosCelsius = parseInt(document.getElementById("celsius").value);
    var resultadoCelsius = document.getElementById("farenheit");
    var resultad = document.getElementById("resultado");
    var farenheit = (gradosCelsius * 9 / 5) + 32;
    resultadoCelsius.value = farenheit;
    resultad.textContent= `Farenheit: ${farenheit.toFixed(2)} `;
}
function Celsius_Kelvin() {

    C = parseFloat(document.getElementById("celsius").value);
    K = C + 273;
    Mensaje = ("Celsius: " + K);
    var resultad = document.getElementById("resultado");
    resultad.textContent= `Kelvin: ${K.toFixed(2)} `;
}



function kilometrosAMillas(kilometros) {
   
    var millas = kilometros * 0.621371;
    return millas;
   
  }

function millasAKilometros(millas) {
 
    var kilometros = millas * 1.60934;
    return kilometros;
  }


  
  function imc(est, kg) {
    kg=prompt("Digite su peso en kilogramos ");
    kilogramos = parseFloat(kg);
    est=prompt("Digite su estatura en centimetros: ");
    est= parseFloat(est) / 100;
    do {
        let estaturaCuad= est ** 2;
        let indiceMasaCorporal= kilogramos / estaturaCuad;
        if(indiceMasaCorporal < 16){
            alert("Ud se encuentra en infrapeso severo, su imc es: " + indiceMasaCorporal);

        }else if(indiceMasaCorporal >= 16 && indiceMasaCorporal <= 16,99){
            alert("Ud se encuentra en infrapeso moderado, su imc es: " + indiceMasaCorporal);

        }else if(indiceMasaCorporal >= 17 && indiceMasaCorporal <= 18,49){
            alert("Ud se encuentra en infrapeso medio, su imc es: " + indiceMasaCorporal);

        }else if(indiceMasaCorporal == 18){
            alert("Ud se encuentra en infrapeso, su imc es: " + indiceMasaCorporal);

        }else if(indiceMasaCorporal > 18 && indiceMasaCorporal <= 24,49){
            alert("Ud posee un peso normal, su imc es: " + indiceMasaCorporal);

        }else if(indiceMasaCorporal >= 25 && indiceMasaCorporal <= 29,99){
            alert("Ud posee un poco de sobrepeso, su imc es: " + indiceMasaCorporal);

        }else if(indiceMasaCorporal == 30){
            alert("Ud tiene un poco de obesidad, su imc es: " + indiceMasaCorporal);

        }else if(indiceMasaCorporal > 30 && indiceMasaCorporal <= 34,99){
            alert("Ud posee obesidad tipo 1, su imc es: " + indiceMasaCorporal);

        }else if(indiceMasaCorporal >= 35 && indiceMasaCorporal <= 39,99){
         alert("Ud posee obesidad tipo 2, su imc es: " + indiceMasaCorporal);
        }else{
            alert("Ud posee obesidad tipo 3, su imc es: " + indiceMasaCorporal);
        }

    }while(kg=="terminar");

return imc;
}
imc();
