let data2 = []
let arrayPeliculas = []
let fav = JSON.parse(localStorage.getItem("peliclasFavoritas"))


fetch("https://moviestack.onrender.com/api/movies", {
    headers: {
      "X-API-Key": "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd",
    }})
    .then((res) => res.json())
    .then((api) => {   
        Object.assign(data, api.movies)
        console.log(data)