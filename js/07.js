/******************* Vid 12 - Objetos - Unir 2 objetos *******************************/
 
const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}
const cliente = {
    nombre: 'Juan',
    premium : true
}

// const nuevoObjeto = Object.assign(producto, cliente) // No
const nuevoObjeto2 = { 
    //Para guadar 2 objetos en uno, debemos hacer un spred operator y tomamos una copia y
    //las colocamos dentro del objeto.
    producto: {...producto},
    cliente: {...cliente}
}

console.log(nuevoObjeto2)
console.log(cliente)
console.log(producto)