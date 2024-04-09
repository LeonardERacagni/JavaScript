let contenedorCheck = document.getElementById("checkboxs")
let contenedorCheckboxs = document.getElementById("contenedorCheckboxs")

let arrayGeneros = []


for (let iteratorDePeliculas of peliculas) {
    arrayGeneros.push(iteratorDePeliculas.genres)
    // console.log(iteratorDePeliculas.genres)
}



let arrayGenerosFlat = arrayGeneros.flat()


let arrayGenerosFiltro = arrayGenerosFlat.filter((item,index)=>{
    return arrayGenerosFlat.indexOf(item) === index
})




let renderizarLista = nombre =>` 
<label class="ml-2 my-2 flex flex-wrap items-center">${nombre}<input class="m-2 appearance-none h-8 w-8 border-2 rounded-sm border-[#6D38E0] checked:bg-[#D2CCFF]" type="checkbox" name="${nombre}" id="" value="${nombre}"></label>`


let checkboxGeneros = array => array.map(renderizarLista).reduce((a,b)=>a+b)
contenedorCheck.innerHTML = checkboxGeneros(arrayGenerosFiltro)


// let crearObejeto = peliculas => `<div>
// <img class="" src="${peliculas.image}" alt="${peliculas.title}">
//         <h3 class="text-3xl mx-2 my-1 font-medium">${peliculas.title}</h3>
//         <h4 class=" mx-2 my-1">${peliculas.tagline}</h4>
//         <p class=" mx-2 my-2 text-clip overflow-hidden">${peliculas.overview}</p>
// </div>`


// let crearPeliculasFiltradas = array => array.map( crearObejeto ).reduce((a,b)=>a+b)
// contenedorCheck.innerHTML = (crearPeliculasFiltradas(peliculas))


contenedorCheck.addEventListener("change", e=>{
    let checkChecked = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.value)
    console.log(checkChecked)
    console.log(checkChecked.toString())

    console.log(peliculas.filter(peliculas=>checkChecked.includes(peliculas.genres)))
    let arrayFiltro = peliculas.filter(peliculas=>checkChecked.includes(peliculas))
    console.log(arrayFiltro)

    // console.log(peliculas.filter(peliculas=>peliculas.genres.includes(checkChecked.toString())))

    // let resultado  = peliculas.filter(subArray => subArray.genres.includes(checkChecked.toString()))
    // console.log(resultado)

})


const segundoArreglo = [10, 20, 30, 40, 50]
let x = segundoArreglo.map((x)=>[x])