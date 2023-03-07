import React, { useState, useEffect } from 'react';

function Peliculas() {
  const peliculasUrl = 'http://api.disneyapi.dev/character?films';

  const [peliculas, setPeliculas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchPeliculas = (peliculasUrl) => {
    fetch(peliculasUrl)
      .then((response) => response.json())
      .then((data) => {
        setPeliculas(data.data.results);
      })
      .catch((error) => console.log(error));
  };
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const results = !searchTerm
    ? peliculas
    : peliculas.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

  useEffect(() => {
    fetchPeliculas(peliculasUrl);
  }, []);
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
