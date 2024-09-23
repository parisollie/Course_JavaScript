/******************* Vid 17 - Funciones - Function Declaration *******************************/

// 

// function sumar(numero = 0, numero2 = 0) {
//     console.log( numero + numero2 )
// }

// Vid 18, funciones con parámetros 
//Mandamos a llamar a la funcion con ()
// sumar(10, 20)
// sumar(2, 3)
// sumar(100)
// sumar()

//Vid 19, funciones que retornan valores. 
function sumar(numero = 0, numero2 = 0) {
   return { 
    //Ponemos identificadores para que sea un objeto válido.
       resultado: numero + numero2, 
       mensaje: 'Hola Mundo'
    }
}

//Creamos una variable y mandamos a llamar  el resultado y mensaje. 
const {resultado, mensaje} = sumar(20, 30)

console.log(resultado)
console.log(mensaje)
