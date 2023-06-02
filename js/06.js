// Destructuring de 2 o más objetos

const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : true
}


const cliente = {
    nombre : "Brandon",
    premium : true
}

// console.log(producto.nombre)
// console.log(cliente.nombre)

const { nombre } = producto
const { nombre: nombreCliente } = cliente 

console.log(nombre)
console.log(nombreCliente)

console.log(producto)
console.log(cliente)


