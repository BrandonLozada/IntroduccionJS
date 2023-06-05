const producto = {
    nombre: "Tablet",
    precio: 300,
    disponbible: true
}

const cliente = {
    nombre: "Brandon",
    premium: true
}

// const nuevoObjeto = Object.assign(cliente, producto)

// console.log(nuevoObjeto)

// Regresa un objeto con dos objetos
const nuevoObjeto = {
    producto,
    cliente
}

console.log(nuevoObjeto)
