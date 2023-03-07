import { useState, useEffect } from 'react';

const personajesUrl = 'http://api.disneyapi.dev/characters';

const [personajes, setPersonajes] = useState([]);

const fetchPersonajes = (personajesUrl) => {
  fetch(personajesUrl)
    .then((response) => response.json())
    .then((data) => {
      setPersonajes(data.data.results);
    })
    .catch((error) => console.log(error));
};

useEffect(() => {
  fetchPersonajes(personajesUrl);
}, []);
