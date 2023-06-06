// Operador || (OR) y && (AND)

const disponible = 1000
const total = 500
const tarjeta = false

// if (tarjeta) {
//     console.log('Sí puedes pagar')
// } else if (disponible > total) {
//     console.log('Sí puedes pagar')
// } else {
//     console.log('No puedes pagar, ponte a lavar los platos')
// }

// En OR puedes tener más de 2 condiciones y al menos una se debe cumplir
if (tarjeta || disponible > total) {
    console.log('Sí puedes pagar')
} else {
    console.log('No puedes pagar, ponte a lavar los platos')
}

// En AND las dos condiciones se deben cumplir 
if (tarjeta && disponible > total) {
    console.log('Sí puedes pagar')
} else {
    console.log('No puedes pagar, ponte a lavar los platos')
}