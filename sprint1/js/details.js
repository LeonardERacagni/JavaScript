let url = new URLSearchParams(location.search)
let id = url.get("id")
console.log(id)

let detalles = document.getElementById("detalles")

let seleccionarPelicula = (array, key) => array.filter(objecto => objecto.id == key)

let peliculaSeleccionada = seleccionarPelicula(peliculas, id)[0]

console.log(peliculaSeleccionada)

let contenido = (objeto) => `
<div class="flex flex-wrap">
    <img class="flex" src="${objeto.image}">



</div>
`
detalles.innerHTML=contenido(peliculaSeleccionada)