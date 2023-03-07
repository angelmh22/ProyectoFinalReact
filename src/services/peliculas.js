import { useState, useEffect } from 'react';

const peliculasUrl = 'http://api.disneyapi.dev/characters?films';

const [peliculas, setPeliculas] = useState([]);

const fetchPeliculas = (peliculasUrl) => {
  fetch(peliculasUrl)
    .then((response) => response.json())
    .then((data) => {
      setPeliculas(data.data.results);
    })
    .catch((error) => console.log(error));
};

useEffect(() => {
  fetchPeliculas(peliculasUrl);
}, []);
