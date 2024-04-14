import {
    probar,
    // filtrarArrayGrande,
    actualizarInterfaz
} from './functions.js'

export{
    resultadoFiltro,
    checksResultado
}


// let contenedorDePeliculas = document.getElementById("container")
// let fragmento1TodasLasPeliculas = new DocumentFragment()

// let crearCadaCarta = function (objetoEntero) {
//     return `
//         <img class="" src="${objetoEntero.image}" alt="${objetoEntero.title}">
//         <h3 class="text-3xl mx-2 my-1 font-medium">${objetoEntero.title}</h3>
//         <h4 class=" mx-2 my-1">${objetoEntero.tagline}</h4>
//         <p class=" mx-2 my-2 text-clip overflow-hidden">${objetoEntero.overview}</p>
//     `
// }




//////////////////////////////////////////////////////////////

probar(peliculas)



let contenedorCheck = document.getElementById("checkboxs")
let contenedorSearch = document.getElementById("search")
let contenedorCheckboxs = document.getElementById("contenedorCheckboxs")

let arrayGeneros = []

//pushea todos los arrays de peliculas
for (let iteratorDePeliculas of peliculas) {
    arrayGeneros.push(iteratorDePeliculas.genres)
    // console.log(iteratorDePeliculas.genres)
}

//junta los arrays
let arrayGenerosFlat = arrayGeneros.flat()

//filtra los arrays de genero iguales
let arrayGenerosFiltro = arrayGenerosFlat.filter((item,index)=>{
    return arrayGenerosFlat.indexOf(item) === index
})
console.log(arrayGenerosFiltro)
//crea los checksbox
let renderizarLista = nombre =>` 
<label class="ml-2 my-2 flex flex-wrap items-center">${nombre}<input class="m-2 appearance-none h-8 w-8 border-2 rounded-sm border-[#6D38E0] checked:bg-[#D2CCFF]" type="checkbox" name="${nombre}" id="" value="${nombre}"></label>`
//agrega los checkbox
let checkboxGeneros = array => array.map(renderizarLista).reduce((a,b)=>a+b)
contenedorCheck.innerHTML = checkboxGeneros(arrayGenerosFiltro)


//crea todas las cards
// for (const iterator of peliculas) {
//     let divCard = document.createElement("div");
//     divCard.className = "h-96 w-96 flex flex-col m-3 bg-[#6D38E0] border-solid hover:border-2 border-[#D2CCFF]" //clases de estilos de tailwind
//     divCard.innerHTML = crearCadaCarta(iterator);
//     fragmento1TodasLasPeliculas.appendChild(divCard);
// }
// contenedorDePeliculas.appendChild(fragmento1TodasLasPeliculas)


let checksResultado;
let resultadoFiltro

// let resultadoFiltrado = filtrarArrayGrande(peliculas, checksResultado, resultadoFiltro)
// probar(resultadoFiltrado)
// console.log(resultadoFiltrado)

// filtra por check
contenedorCheck.addEventListener("change", e => {
    let checkChecked = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.value);

    if (checkChecked.length === 0) {
        // Si no hay ninguna casilla de verificación seleccionada, usa todas las películas disponibles
        checksResultado = peliculas;
    } else {
        // Filtra las películas según las casillas de verificación seleccionadas
        let filtra = (array, seleccion) => {
            return array.filter(e => {
                return e.genres.some(genre => seleccion.includes(genre));
            });
        };
        checksResultado = filtra(peliculas, checkChecked);
    }

    console.log(checksResultado);
    probar(checksResultado);
});


contenedorSearch.addEventListener("keyup", e => {
    let buscador = e.target.value.toLowerCase().trim()
    resultadoFiltro = peliculas.filter(elemento => elemento.title.toLowerCase().trim().includes(buscador))
    
    if (resultadoFiltro.length === 0) { 
        let h4 = document.createElement("h4")
        h4.className = "text-bold"
        h4.innerHTML = `Disculpe el título de la película no se encuentra, por favor ingrese otro`
        reemplazar(h4, cardContainer)
        return h4
    } else {
        console.log(resultadoFiltro)
        probar(resultadoFiltro)
    }
})






// let checksResultado
// let resultadoFiltro


//filtra por check
// contenedorCheck.addEventListener("change", e=>{
//     let checkChecked = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.value)     
//     let filtra = (array, seleccion) => {
//         return array.filter(e => {
//             return e.genres.some(genre => seleccion.includes(genre));
//         });
//     };
//     checksResultado = filtra(peliculas, checkChecked)
    
// })

// //filtra por buscador
// contenedorSearch.addEventListener("keyup",e=>{
//     let buscador = e.target.value.toLowerCase().trim()
//     resultadoFiltro = peliculas.filter(elemento => elemento.title.toLowerCase().trim().includes(buscador))
    
//     if (resultadoFiltro.length = 0){
//         let h4 = document.createElement("h4")
//         h4.className="text-bold"
//         h4.innerHTML = `Disculpe el titulo de la pelicula no se encuentra, por favor ingrese otro`
//         reemplazar(h4, cardContainer)
//         return h4
//     }
// })



