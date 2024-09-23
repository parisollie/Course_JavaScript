/***************************** Vid 28 Scope *******************************/
// Scope, el alcance que tiene una variable 

/*const precio=400
 
function unaFuncion() {
    const precio = 600
    console.log(precio)
}

if(true) {
    // Toma el valor global
    console.log(precio)
}

unaFuncion()*/


//------------------------------------------------------------------------------

//De esta manera imprime 600
const precio2 = 300
 
function unaFuncion() {
    const precio2 = 600
    //si no existe toma la global
    console.log(precio2)
}
//Imprime 300
console.log(precio2)
unaFuncion()

//------------------------------------------------------------------------------

//De esta manera imprime 300
/*const precio3 = 300
 
function unaFuncion3() {
 //aqui no tenemos un valor, por eso tomará el global
    console.log(precio3)
}

unaFuncion3()*/