const tecnologias = ['Vue.js', 'Javascript', 'Node.js', 'HTML', 'CSS', 'Git']
const numeros = [10, 20, 30]

// Includes (true | false)
let resultado = tecnologias.includes('Git')
// const resultado = tecnologias.includes('GraphQL')

// FindIndex - Muestra el índice
//resultado = tecnologias.findIndex(tech => tech === 'Git')

// Some (true | false) - Con que uno cumpla la condición es true
//resultado = numeros.some(numero => numero > 35)

// Find - Muestra el valor
//resultado = numeros.find(numero => numero === 1)

// Every (true | false) - Todos deben cumplir la condición
//resultado = numeros.every(numero => numero > 5)

// Reduce
resultado = numeros.reduce((total, numero) => numero + total, 100)

// Filter
resultado = tecnologias.filter(tech => tech !== 'Vue.js')
// resultado = tecnologias.filter(tech => tech === 'Vue.js')

console.log(resultado)

