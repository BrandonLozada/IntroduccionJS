// Arrow Functions

const sumar = (numero1 = 0, numero2 = 10) => {
    console.log(numero1 + numero2)
}

const tecnologias = ['Vue.js', 'Javascript', 'Node.js', 'HTML', 'CSS']

// forEACH
tecnologias.forEach(tech => console.log(tech))

// El return se da por implicito
const arrayMap = tecnologias.map(tech => tech)

const tecnologias2 = tecnologias.filter(tech => tech !== 'HTML')

console.log(arrayMap)
console.log(tecnologias2)

// sumar(1, 2)
// sumar(10, 289)
// sumar(24, 289)

// Array Function solo pueden ser utilizados en Array Methods y Function Expression 
// pero no pueden con Function Declaration