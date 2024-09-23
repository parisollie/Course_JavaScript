
/******************* Vid 14 - Operaciones en los arreglos *******************************/
 
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

/*---------------------------- Añadir elementos al array-------------------------------- */

// tecnologias.push('GraphQL') // Añade al final del array
// tecnologias.unshift('GraphQL') // Añade al inicio del array

//Copia tecnologias y agregale al final 'GraphQL'
// const nuevoArreglo = [...tecnologias, 'GraphQL']

//Agregar al inicio.
// const nuevoArreglo = ['GraphQL', ...tecnologias]

/*---------------------------- Eliminar elementos del array----------------------------- */

// tecnologias.pop() // Elimina del final
// tecnologias.shift() // Elimina del inicio
//cuantos elementos apartir del elemento quiero eliminar.
// tecnologias.splice(2, 3) // Elimina de una posición en especifica

//filter,nos retorna un arreglo nuevo y no modifica el arreglo original.

// const nuevoArray = tecnologias.filter( function(tech) {
//Retorname el que sea React 
//     return tech === 'React'
// })

/*---------------------------- Reemplazar del array------------------------------------ */


// tecnologias[0] = 'GraphQL'

const nuevoArray = tecnologias.map( function(tech) {
    if(tech === 'HTML') {
        return 'GraphQL'
    } else {
        return tech
    }
})

console.table(tecnologias)
console.table(nuevoArray)