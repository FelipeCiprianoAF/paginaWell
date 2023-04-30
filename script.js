
function CalcularIMC(){
    let imc = peso / (altura*altura);
    result.textContent = imc;
}

let altura = document.getElementById('altura');
let peso = document.getElementById('peso');

let formulario = document.getElementById('formulario');
let result = document.getElementById('resultado');

formulario.addEventListener('submit', CalcularIMC)