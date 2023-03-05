const URL = 'https://api.tvmaze.com/shows'; // hay q cambiarlo
const URL1 = 'https://api.tvmaze.com/episodes'; // hay q cambiarlo

export default async function getPeliculas(id) {
  const respuesta = await fetch(`${URL}/${id}/episodes`);
  const peliculas = await respuesta.json();
  return peliculas;
}

export async function getPelicula(id) {
  const respuesta = await fetch(`${URL1}/${id}`);
  const pelicula = await respuesta.json();
  return pelicula;
}
