const inpuNombre = document.querySelector('#nombre')
const inputPassword = document.querySelector('#password')
const heading = document.querySelector('.heading')

inpuNombre.addEventListener('input', (e) => {
    console.log(e.target.value)
    // console.log('Escribiendo...')
    // console.log(e.target.value.length)


    // Otra forma es
    heading.textContent = e.target.value

    // if (inpuNombre.value === 'Cambia heading'){
    //     heading.textContent = 'Has cambiado el heading'
    // }
})

inputPassword.addEventListener('input', () => {
    inputPassword.type = 'text'
    // console.log(e.target.type)

    setTimeout(() => {
        inputPassword.type = 'password'
    }, 1000)
})
