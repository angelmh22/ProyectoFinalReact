// useState es una función que crea internamente una variable
// donde podremos almacenar el estado de nuestro componente
import React, { useState, useEffect } from 'react';

function Peliculas() {
  const peliculasUrl = 'http://api.disneyapi.dev/character?films';

  // declaramos el useState con un valor incial
  // para esa variable y devuelve un array con dos elementos
  // el valor de la variable y la función para modificarla
  const [peliculas, setPeliculas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // aqui hacemos el fetch para coger la información de la api
  // mediante la url que hemos declarado arriba
  const fetchPeliculas = (peliculasUrl) => {
    fetch(peliculasUrl)
      .then((response) => response.json())
      .then((data) => {
        setPeliculas(data.data.results);
      })
      .catch((error) => console.log(error));
  };
  // el handleChange se utiliza para actualizar el estado
  // será actualizado mientras escribimos (input)
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const results = !searchTerm
    ? peliculas
    : peliculas.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

  // es usado para la inicialización de variables,
  // llamadas a APIs o para limpiar un componente antes de desmontarlo del DOM
  useEffect(() => {
    fetchPeliculas(peliculasUrl);
  }, []);
  // si todo ha ido bien nos sacará los datos que hemos pedido que nos pase
  return (
    <div className="container mb-4">
      <div className="row">
        <input type="text" placeholder="Busca una pelicula" className="form-control mt-4" value={searchTerm} onChange={handleChange} />
        {results.map((item) => (
          <div className="col-3 d-flex flex-wrap">
            <div className="card mt-4 text-center">
              <img src={`${item.imageUrl}.`} width="300px" height="300px" alt="#" />
              <h4 className="card-title">{item.title}</h4>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Peliculas;
