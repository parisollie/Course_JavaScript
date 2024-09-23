/***************************** Vid 31 manipular elementos HTML con JS*******************************/

//Este selector nos retorna un objeto 
const heading = document.querySelector('.heading')
//Accedo al heading y le agrego un nuevo elemento.
heading.textContent = 'Un Nuevo Heading'
console.log(heading.textContent)

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'Un valor por default'


const enlaces = document.querySelectorAll('.navegacion a')
//Iteramos en cada enlace para hcer un nuevo enlace
enlaces.forEach( enlace => enlace.textContent = 'Nuevo Enlace')
