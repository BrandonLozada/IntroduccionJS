// Operadores Ternarios - (condicion) ?  si se cumple : si no se cumple

const disponible = 1000
const total = 500
const tarjeta = true

disponible > total ? 
        console.log('Sí puedes pagar con saldo') : 
    tarjeta ? 
        console.log('Sí puedes pagar con tarjeta') : 
        console.log('No puedes pagar')

disponible > total || tarjeta ? 
        console.log('Sí puedes pagar con saldo o tarjeta') :  
        console.log('No puedes pagar')


