/***************************** Vid 27 Ternarios *******************************/

//Es un if en una sola linea
//
//(se ejecuta si todo va bien ) ? : (se ejecuta si la primera condicion no se cumple)

//!autenticado, si tenemos un signo al principio niega el valor de lo que tenga.
const autenticado = true

autenticado ? 
    console.log('usuario autenticado') : 
    console.log('No autenticado, dirigir hacia login')

//                        Doble ternario

const saldo = 600
const pagar = 800
const tarjeta = false

saldo > pagar ? 
    console.log('Puedes pagar con saldo') : 
    tarjeta ? 
        console.log('Puedes pagar con tarjeta') : 
        console.log('No no puedes pagar')