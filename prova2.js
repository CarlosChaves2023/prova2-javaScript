var nome = prompt(`Digite seu nome:`)
var heightCentimetros = parseFloat(prompt(`Digite sua altura em centímetros:`))
var heightMetros = heightCentimetros / 100
var weight = parseFloat(prompt(`Digite seu peso em kg:`))
var imc = weight / (heightMetros * heightMetros)

console.log(`Nome:`, nome)

if (imc < 16){
    console.log(`IMC: ${imc.toFixed(2)} - Baixo peso muito grave.`)
    alert(`Nome: ${nome}
    IMC: ${imc.toFixed(2)} - Baixo peso muito grave.`)
} else if (imc < 16.99){
    console.log(`IMC: ${imc.toFixed(2)} - Baixo peso grave`)
    alert(`Nome: ${nome}
    IMC: ${imc.toFixed(2)} - Baixo peso grave.`)
} else if (imc < 18.49){
    console.log(`IMC: ${imc.toFixed(2)} - Baixo peso`)
    alert(`Nome: ${nome}
    IMC: ${imc.toFixed(2)} - Baixo peso.`)
} else if (imc < 24.99){
    console.log(`IMC: ${imc.toFixed(2)} - Peso normal`)
    alert(`Nome: ${nome}
    IMC: ${imc.toFixed(2)} - Peso normal.`)
} else if (imc < 29.99){
    console.log(`IMC: ${imc.toFixed(2)} - Sobrepeso`)
    alert(`Nome: ${nome}
    IMC: ${imc.toFixed(2)} - Sobrepeso.`)
} else if (imc < 34.99){
    console.log(`IMC: ${imc.toFixed(2)} - Obesidade grau I`)
    alert(`Nome: ${nome}
    IMC: ${imc.toFixed(2)} - Obesidade grau I.`)
} else if (imc < 39.99){
    console.log(`IMC: ${imc.toFixed(2)} - Obesidade grau II`)
    alert(`Nome: ${nome}
    IMC: ${imc.toFixed(2)} - Obesidade grau II.`)
} else {
    console.log(`IMC: ${imc.toFixed(2)} - Obesidade grau III`)
    alert(`Nome: ${nome}
    IMC: ${imc.toFixed(2)} - Obesidade grau III.`)
}
