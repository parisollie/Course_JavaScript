/*************************** Vid 10 - Objetos - Manipulación ****************************************/

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

// Object.freeze(producto) - Freeze - No deja modificarlo, no permite añadir ni eliminar.
// Object.seal(producto) - Modificar propiedades existentes, no permite añadir ni eliminar.

// Un objeto si permite reescribir un valor.
producto.nombre = "Monitor Curvo"

// Si no existe, lo va a añadir al objeto.
producto.imagen = "imagen.jpg"

//Eliminar propiedades.
delete producto.disponible

console.table(producto)