var weight = prompt(`Digite seu peso em kg:`)
var height = prompt(`Digite sua altura:`)
var imc = weight / (height ** 2)
if (imc < 16){
    console.log(`IMC: ${imc.toFixed(2)} - Baixo peso muito grave.`)
    alert(`IMC: ${imc.toFixed(2)} - Baixo peso muito grave.`)
} else if (imc < 16.99){
    console.log(`IMC: ${imc.toFixed(2)} - Baixo peso grave`)
    alert(`IMC: ${imc.toFixed(2)} - Baixo peso grave.`)
} else if (imc < 18.49){
    console.log(`IMC: ${imc.toFixed(2)} - Baixo peso`)
    alert(`IMC: ${imc.toFixed(2)} - Baixo peso.`)
} else if (imc < 24.99){
    console.log(`IMC: ${imc.toFixed(2)} - Peso normal`)
    alert(`IMC: ${imc.toFixed(2)} - Peso normal.`)
} else if (imc < 29.99){
    console.log(`IMC: ${imc.toFixed(2)} - Sobrepeso`)
    alert(`IMC: ${imc.toFixed(2)} - Sobrepeso.`)
} else if (imc < 34.99){
    console.log(`IMC: ${imc.toFixed(2)} - Obesidade grau I`)
    alert(`IMC: ${imc.toFixed(2)} - Obesidade grau I.`)
} else if (imc < 39.99){
    console.log(`IMC: ${imc.toFixed(2)} - Obesidade grau II`)
    alert(`IMC: ${imc.toFixed(2)} - Obesidade grau II.`)
} else {
    console.log(`IMC: ${imc.toFixed(2)} - Obesidade grau III`)
    alert(`IMC: ${imc.toFixed(2)} - Obesidade grau 3.`)
}
