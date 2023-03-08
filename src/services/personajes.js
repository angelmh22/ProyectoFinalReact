const urlCharacters = 'http://api.disneyapi.dev/characters';

export async function getPersonajes() {
  const respuesta = await fetch(`${urlCharacters}`);
  const personajes = await respuesta.json();
  return personajes;
}

export async function getPersonaje(id) {
  const respuesta = await fetch(`${urlCharacters}/${id}`);
  const personaje = await respuesta.json();
  return personaje;
}
