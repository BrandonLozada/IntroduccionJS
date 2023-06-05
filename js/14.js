// Function Expression

sumar(1, 2)
sumar(10, 289)
sumar(24, 289)

// Esta función a variable no se puede llamar
// const sumar = function (numero1 = 0, numero2 = 10) {
//     console.log(numero1 + numero2)
// }

// Esta función se puede llamar desde cualquier parte del código
function sumar (numero1 = 0, numero2 = 10) {
    console.log(numero1 + numero2)
}
