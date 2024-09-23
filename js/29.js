/***************************** Vid 37 Fetch API *************************/

//fecth API es el nuevo AJAX

const url = "https://jsonplaceholder.typicode.com/comments"

const consultarAPI = () => {
    //fecth se remplaza por axios 
    fetch(url)
        //Dame la respuesta de Json 
        .then( respuesta => respuesta.json())
        .then( resultado => {
            //Imprimimos cada uno de ellos 
            resultado.forEach( comentario => {
                console.log(comentario)
            })
        })
}
consultarAPI();