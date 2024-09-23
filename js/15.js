/******************* Vid 22 Funciones - Arrow Functions y array *******************************/

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

// const nuevoArray = tecnologias.map( tech => {
//     if(tech === 'HTML') {
//         return 'GraphQL'
//     } else {
//         return tech
//     }
// })

//Filter toma el arreglo y en base a la conidcion retorna un nuevo arreglo.
//regresa diferente a react
const nuevoArray2 = tecnologias.filter( tech => tech !== 'React')

// console.log(nuevoArray)
console.log(nuevoArray2)
