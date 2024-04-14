export {
    probar,
    contenedorDePeliculas,
    // filtrarArrayGrande,
    actualizarInterfaz
}


let contenedorDePeliculas = document.getElementById("container")


let probar = function (objeto){
    //eliminar todos los elementos hijos antes de iterar
    while (contenedorDePeliculas.firstChild){
        contenedorDePeliculas.removeChild(contenedorDePeliculas.firstChild)
        }

    if(Array.isArray(objeto)) {
        objeto.forEach(obj => {
            let divCard = document.createElement("div");
            divCard.className = "h-96 w-96 flex flex-col m-3 bg-[#6D38E0] border-solid hover:border-2 border-[#D2CCFF]" //clases de estilos de tailwind
            divCard.innerHTML = `
            <img class="" src="${obj.image}" alt="${obj.title}">
            <h3 class="text-3xl mx-2 my-1 font-medium">${obj.title}</h3>
            <h4 class=" mx-2 my-1">${obj.tagline}</h4>
            <p class=" mx-2 my-2 text-clip overflow-hidden">${obj.overview}</p>
            <a href="./details.html?id=${obj.id}" class="flex grow justify-center m-1 bg-[#D2CCFF] text-black text-xl text-bold hover:bg-[#dd00ff] hover:text-white">Ver más</a>
            `;
            contenedorDePeliculas.appendChild(divCard)
        })
    }
}



// function filtrarArrayGrande(peliculas, checkBox, search) {
//     if (!checkBox || !search) {
//         // Si alguno de los filtros es undefined, retornar todas las películas
//         return peliculas;
//     } else {
//         return peliculas.filter(item =>
//             checkBox.some(filtro1 => filtro1.categoria === item.categoria) &&
//             search.some(filtro2 => filtro2.categoria === item.categoria)
//         );
//     }
// }



// function filtrarArrayGrande(peliculas, checkBox, search) {
//     return peliculas.filter(item =>
//         checkBox.some(filtro1 => filtro1.categoria === item.categoria) &&
//         search.some(filtro2 => filtro2.categoria === item.categoria)
//     )
// }



function actualizarInterfaz(checksResultado, resultadoFiltro) {
    const resultadosFiltrados = filtrarArrayGrande(peliculas, checksResultado, resultadoFiltro);
    console.log(resultadosFiltrados)
}





//Reemplaza busqueda por mensaje de no encontrado
let reemplazar = (nodo, container) => {
    container = document.querySelector(".container")
    if (container.tieneHijos) {
        container.replazaHijos(nodo)
    }
}