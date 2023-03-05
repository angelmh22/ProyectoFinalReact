const URL = 'https://api.tvmaze.com/people'; // hay q cambiarlo

export async function getPersonajes() {
  const respuesta = await fetch(`${URL}`);
  const personajes = await respuesta.json();
  return personajes;
}

export async function getPersonaje(id) {
  const respuesta = await fetch(`${URL}/${id}`);
  const personaje = await respuesta.json();
  return personaje;
}
