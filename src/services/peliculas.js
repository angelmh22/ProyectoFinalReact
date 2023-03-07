const URL = 'http://gateway.marvel.com/v1/public/series?&ts=1&apikey=ad6ea905acb56b4f31146d812a2568a1&hash=e666c45f929cb194ce2111c743dc3ff9';

const urlCharacters = 'http://gateway.marvel.com/v1/public/series';

export async function getPeliculas() {
  const respuesta = await fetch(`${URL}`);
  const peliculas = await respuesta.json();
  return peliculas;
}

export async function getPelicula(id) {
  const respuesta = await fetch(`${urlCharacters}/${id}`);
  const pelicula = await respuesta.json();
  return pelicula;
}
