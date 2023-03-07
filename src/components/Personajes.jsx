import React, { useState, useEffect } from 'react';

function Personajes() {
  const personajesUrl = 'http://api.disneyapi.dev/characters';

  const [personajes, setPersonajes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchPersonajes = (personajesUrl) => {
    fetch(personajesUrl)
      .then((response) => response.json())
      .then((data) => {
        setPersonajes(data.data.results);
      })
      .catch((error) => console.log(error));
  };
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const results = !searchTerm
    ? personajes
    : personajes.filter((films) => films.name.toLowerCase().includes(searchTerm.toLowerCase()));

  useEffect(() => {
    fetchPersonajes(personajesUrl);
  }, []);
  return (
    <div className="container mb-4">
      <div className="row">
        <input type="text" placeholder="Busca un Personaje" className="form-control mt-4" value={searchTerm} onChange={handleChange} />
        {results.map((films) => (
          <div className="col-3 d-flex flex-wrap">
            <div className="card mt-4 text-center">
              <img src={`${films.imageUrl}`} height="300px" alt="#" />
              <h4 className="card-title">{films.name}</h4>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Personajes;
