/***************************** Vid 35 Generand codigo con HTML con Javascript  *************************/

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e => {
    e.preventDefault()

    const nombre = document.querySelector('.nombre').value
    const password = document.querySelector('.password').value

    const alertaPrevia = document.querySelector('.alerta')
    if(alertaPrevia) {
        //revisa si ya tiene una alerta las remueve 
        alertaPrevia.remove()
    }

    //En Java scritp en html se escribe con mayusculas
    const alerta = document.createElement('DIV')
    alerta.classList.add('alerta')

    if(nombre === '' || password === '') {
        alerta.textContent = 'Todos los campos son obligatorios'
        alerta.classList.add('error')
    } else {
        alerta.textContent = 'Todo bien..'
        alerta.classList.add('exito')
    }

    //appendchild agregamos al hijo como formulario 
    formulario.appendChild(alerta)
})