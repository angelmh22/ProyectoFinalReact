const urlPeliculas = 'http://api.disneyapi.dev/characters?films=name';

// con esta función obtenemos todas las películas
export async function getPeliculas() {
  const respuesta = await fetch(`${urlPeliculas}`);
  const peliculas = await respuesta.json();
  return peliculas;
}

// con esta función obtenemos una pelicula sola con su id correspondiente
export async function getPelicula(id) {
  const respuesta = await fetch(`${urlPeliculas}/${id}`);
  const pelicula = await respuesta.json();
  return pelicula;
}
