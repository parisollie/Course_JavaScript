/***************************** Vid 40 Template Strings*************************/
 
//Concatenar variables 
const producto = "Tablet de 12 pulgadas"
const precio = 400
const marca = "Orange"

function textoDeFuncion() {
    return "Este texto proviene de la función"
}

console.log( producto + " $" + precio + " Dolares, Marca: " + marca )

//Nueva seccion de concatenar 
console.log(`${producto} $${precio} Dolares, Marca: ${marca}, ${textoDeFuncion()}`)