// Iteradores en JS
const tecnologias = ['Vue.js', 'Javascript', 'Node.js', 'HTML', 'CSS']

const vuejs = tecnologias[0]
const js = tecnologias[1]
const node = tecnologias[2]
const html = tecnologias[3]
const css = tecnologias[4]


console.log(vuejs)
console.log(js)
console.log(node)
console.log(html)
console.log(css)

// Aqui solo itera el arreglo
// forEach
const arrayForEach = tecnologias.forEach(function(tech) {
    return tech
})

// Lo que hace map es que si tienes un return y lo igualas a una variable te genera otro arreglo
// map
const arrayMap = tecnologias.map(function(tech) {
    return tech
})

console.log(arrayForEach)
console.log(arrayMap)