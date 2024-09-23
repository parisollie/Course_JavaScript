/******************* Vid 20 - Funciones - Function Expression *******************************/
// Las diferencias son:

//Esta usa la sintaxis como una variable mientras la otra usa function.
const sumar = function(numero = 0, numero2 = 0) {
    return numero + numero2
}

//siempre se debe poner abajo de la function expression , nunca detecta la funcion en la parte de arriba.
const resultado = sumar(30)
console.log(resultado)