const urlPeliculas = 'http://api.disneyapi.dev/character';

// con esta función obtenemos todas las películas
export async function getPeliculas() {
  const respuesta = await fetch(`${urlPeliculas}`);
  const peliculas = await respuesta.json();
  return peliculas;
}

// con esta función obtenemos una pelicula sola con su id correspondiente
export async function getPelicula(film) {
  const respuesta = await fetch(`${urlPeliculas}?films=${film}`);
  const pelicula = await respuesta.json();
  return pelicula;
}
