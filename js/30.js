/***************************** Vid 38  Fetch API  - Async Await *************************/

const url = "https://jsonplaceholder.typicode.com/comments"

const consultarAPI = async () => {
    //Las funciones siempre deben ser asincronas con  async y le ponemos await 
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
}
consultarAPI();