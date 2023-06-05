// Template Strings o Concatenación

const cliente = 'Brandon'
const saldo = 369

console.log('El cliente : ' + cliente + ' tiene un saldo de ' + saldo + ' pesos')
console.log(`El cliente ${cliente} tiene un saldo de ${saldo} pesos`)

const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: true
}

console.log(`El producto ${producto.nombre} tiene un precio de ${producto.precio} pesos`)