import { useEffect, useState } from 'react';

const API_PERSONAJES = 'https://api.disneyapi.dev/character?name';

export const useFetch = (params) => {
  // creamos los estados que vamos a necesitar
  const [cargando, setCargando] = useState(true); // Para la carga (loading)
  const [error, setError] = useState(false); // Para algún error (ej: mal escrito el personaje)
  const [datos, setDatos] = useState(null); // Para los datos

  const fetchPersonaje = (url) => {
    setCargando(true);
    fetch(url)
      .then((respuesta) => respuesta.json()) // Promesa
      .then((respuestaJson) => {
        if (respuestaJson.Response === 'True') {
          setDatos(respuestaJson.data);
          setError(false);
        } else {
          setError(true);
        }
        setCargando(false);
        console.log('Datos: ', respuestaJson);
      })
      .catch((error) => console.log(error));
  };
  // llamamos a la funcion
  useEffect(() => {
    fetchPersonaje(`${API_PERSONAJES}${params}`); // Lo pasamos como parametro
  }, [params]); // Esto se ejecuta cada vez que params cambie

  return { cargando, error, datos };
};
