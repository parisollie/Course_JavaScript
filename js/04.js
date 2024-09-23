/*************************** Vid 09 - Objetos ******************************************/

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

console.log(producto)
console.table(producto)

//Accediciendo a las propiedades del objeto 
console.log( producto.nombre )
console.log( producto.precio )
console.log( producto.disponible )

// Destructuring - Sacando el valor de una estructura 
const { nombre, precio, disponible } = producto
console.log(nombre)
console.log(precio)
console.log(disponible)

// Object Literal Enhacement lo contrario a Destructuring
/*Sirve para variables fuera de un objeto y poder colocarlas dentro de un objeto */
const autenticado2 = true
const usuario2 = "Juan"

//Las colocamos dentro del objeto 
const nuevoObjeto = {
    //Cuando ambos son iguales me puedo quedar con el del lado derecho
    //autenticado: autenticado
    autenticado,
    usuario
}

console.table(nuevoObjeto)