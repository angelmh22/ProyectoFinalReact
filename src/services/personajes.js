const URL = 'http://gateway.marvel.com/v1/public/characters?&ts=1&apikey=ad6ea905acb56b4f31146d812a2568a1&hash=e666c45f929cb194ce2111c743dc3ff9';

const urlCharacters = 'http://api.disneyapi.dev/characters';

export async function getPersonajes() {
  const respuesta = await fetch(`${URL}`);
  const personajes = await respuesta.json();
  return personajes;
}

export async function getPersonaje(id) {
  const respuesta = await fetch(`${urlCharacters}/${id}`);
  const personaje = await respuesta.json();
  return personaje;
}
