/***************************** Vid 33 Eventos del DOM - Inputs *******************************/

const inputNombre = document.querySelector('.nombre')
inputNombre.addEventListener('input', function(e) {
    console.log(e.target.value)
})

const inputPassword = document.querySelector('.password')
inputPassword.addEventListener('input', funcionPassword)

function funcionPassword() {
    //Para que se vea el passqord
    inputPassword.type = 'text'

    //Es el tiempo que parpadea el input para nosotros ver la letra anterior del password
    setTimeout(() => {
        inputPassword.type = 'password'
    }, 100);
}