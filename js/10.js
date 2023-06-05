const tecnologias = ['Vue.js', 'Javascript', 'Node.js', 'HTML', 'CSS']

// Agregar elemento al final del arreglo
//tecnologías.push('Git')

// Agregar elemento al inicio del arreglo
// tecnologías.unshift('React')

// Elimina elemento al final del arreglo
// tecnologias.pop()

// Elimina elemento al inicio del arreglo
// tecnologias.shift()

// Elimina elementos desde la posición 2, de 'Node.js' hasta 'CSS'
// tecnologias.splice(2)

// Elimina solo el elemento 'Node.js' en la posición 2
// tecnologias.splice(2,1)

// Elimina solo los elementos desde la posición 2 hasta el que se indique, 'Node.js' hasta 'HTML'
// tecnologias.splice(2,2)

// Crear una copía del arreglo 'tecnologías' y agregar elemento el final del nuevo arreglo
// const nuevoArreglo = [...tecnologias, 'Git']
// const nuevoArreglo = ['React', ...tecnologias]

tecnologias.filter(function (tech) {
    console.log(tech)
})

// Crea un nuevo arreglo 'tecnologias2' con los elementos que sean diferentes a 'HTML'
const tecnologias2 = tecnologias.filter(function (tech) {
    return tech !== 'HTML'
})


console.log(tecnologias)
// console.log(nuevoArreglo)
