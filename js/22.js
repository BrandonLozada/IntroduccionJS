// Scope

let precio = 300

function unaFunction () {
    // Defines una nueva
    // let precio = 100
    // Reescribes su valor de forma global
    precio = 100
    console.log(precio)
}

unaFunction()
console.log(precio)