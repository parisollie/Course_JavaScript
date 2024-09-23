/******************* Vid 11 - Objetos - Destructuring con 2 o más objetos *******************************/

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: 'Rafael',
    premium : true
}
//No puede haber variables que se llamen igual, la solucion es crearla un alias, 
//asi no tenemos repetidos
const { nombre, precio, disponible } = producto
const { nombre: nombreCliente, premium } = cliente

console.log(nombre)
console.log(nombreCliente)