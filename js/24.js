/***************************** Vid 32 Eventos del DOM - Clicks*******************************/


const heading = document.querySelector('.heading')
//.addEventListener , espero a que el elemento pase 
heading.addEventListener('click', () =>  {
    heading.textContent = 'Nuevo Heading al dar click'
})



const enlaces = document.querySelectorAll('.navegacion a')
//Accedemos a cada uno de los enlaces con los ForEach
enlaces.forEach( enlace => {
    enlace.addEventListener('click', () => {
        console.log('Diste click en un enlace')
    })
})
