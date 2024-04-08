let contenedorDePeliculas = document.getElementById("container")
let fragmento = new DocumentFragment();

let crearCadaCarta = function (objetoEntero) {
    return `
        <img class="" src="${objetoEntero.image}" alt="${objetoEntero.title}">
        <h3 class="text-3xl mx-2 my-1 font-medium">${objetoEntero.title}</h3>
        <h4 class=" mx-2 my-1">${objetoEntero.tagline}</h4>
        <p class=" mx-2 my-2 text-clip overflow-hidden">${objetoEntero.overview}</p>
    `
}

for (const iterator of peliculas) {
    let divCard = document.createElement("div");
    divCard.className = "h-96 w-96 flex flex-col m-3 bg-[#6D38E0] border-solid hover:border-2 border-[#D2CCFF]" //clases de estilos de tailwind
    divCard.innerHTML = crearCadaCarta(iterator);
    fragmento.appendChild(divCard);
}

contenedorDePeliculas.appendChild(fragmento);
