/******************* Vid 16 - Iteradores en JS *******************************/
 
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

// forEach - Acceder a cada elemento del array, este dice undefined
const arrayForeach = tecnologias.forEach( function (tech) {
    return tech
})

// Crear un nuevo array el map 
const arrayMap = tecnologias.map( function (tech) {
    return tech
})

/* For each te permite listar y acceder a cada elemento y map te permite crear un arreglo  */

console.log(arrayForeach)
console.log(arrayMap)