var titulo = document.querySelector(".titulo")
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(".paciente")

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso")
    var peso = tdPeso.textContent

    var tdAltura = paciente.querySelector(".info-altura")
    var altura = tdAltura.textContent

    var imc = peso / (altura * altura)

    var tdImc = paciente.querySelector(".info-imc")

    var pesoValido = true
    var alturaValida = true

    if(peso <= 0 || peso >= 1000){
        pesoValido = false
        console.log("Peso inválido")
        tdImc.textContent = "Peso inválido"
        paciente.classList.add("paciente-invalido")
    }

    if(altura <= 0 || altura >= 3.00){
        alturaValida = false
        console.log("Altura invalida")
        tdImc.textContent = "Altura inválido"
        paciente.classList.add("paciente-invalido")
    }

    if(pesoValido && alturaValida){
    tdImc.textContent = imc.toFixed(2)
    }
}

var botaoAcionar = document.querySelector("#adicionar-paciente")
botaoAcionar.addEventListener("click", function(event){
    event.preventDefault()

var form = document.querySelector("#form-adiciona")
var nome = form.nome.value;
var peso = form.peso.value;
var altura = form.altura.value;
var gordura = form.gordura.value;

console.log("teste!")


});


console.log("teste!")