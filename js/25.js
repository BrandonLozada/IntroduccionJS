const heading = document.querySelector('.heading');
const enlaces = document.querySelectorAll('.navegacion a')

// click
// dblclick
heading.addEventListener('click', () => {
    // const numero = 69
    // if (numero === 10) {
    //     heading.textContent = 'Mi número es 10'
    // } else {
    //     heading.textContent = 'El número es diferente'
    // }

    heading.textContent = 'Nuevo Heading al dar Click'
})


// Para aplicar un eventListener debemos iterar los elemento y luego aplicar la función
enlaces.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
        e.preventDefault()
        enlace.textContent = 'Nuevo Nombre' 
    })
})

// addEventListener no es una función que se pueda aplicar a una colección
// enlaces.addEventListener('click', () => {
//     console.log('diste click')
// })