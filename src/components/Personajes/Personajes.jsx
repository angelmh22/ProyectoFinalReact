import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getPersonajes } from '../../services/personajes';
import '../../index.css';

function Personajes() {
  const [personajes, setPersonajes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getPersonajes().then((characters) => setPersonajes(characters.data));
  }, []);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container mb-4">
      <div className="row">
        <input type="text" placeholder="Busca un Personaje" className="form-control mt-4" value={searchTerm} onChange={handleChange} />
        {personajes.map((character) => (
          <div className="col-3 d-flex flex-wrap">
            <NavLink to={`${character.id}`} className="d-flex link-css">
              <div className="card shadow mt-4 text-center">
                <img src={`${character.imageUrl}`} width="300px" height="300px" alt="#" />
                <h4 className="card-title my-3">{character.name}</h4>
              </div>
            </NavLink>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Personajes;
