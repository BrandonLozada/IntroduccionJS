// Optional chaining o encadenamiento opcional

const alumno = {
    nombre: 'Brandon',
    clase: 'Programación 1',
    aprobado: true
}

// Forma que desencadena posible error
// console.log(alumno.examenes.examen1)

// Fomra que comprueba si existe esa propiedad
if (alumno.examenes) {
    console.log(alumno.examenes.examen1)
}

// Forma optima de encadenamiento opcional
setTimeout(() => {
    alumno.examenes = {
        examen1: 100,
        examen2: 69,
        examen3: 96
    }

    console.log(alumno.examenes?.examen2)
}, 3000);


console.log(alumno.examenes?.examen2)

console.log('¡Hola Mundo!')

