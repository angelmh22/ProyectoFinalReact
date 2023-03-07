import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPersonaje } from '../../services/personajes';
import '../../index.css';

function CardPersonajes() {
  const { personajeId } = useParams();
  const [personaje, setPersonaje] = useState();

  useEffect(() => {
    setPersonaje(personajeId).then((result) => {
      setPersonaje(result.data.results[0]);
    });
  }, [personajeId]);

  if (!personaje) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="card text-left card-css shadow my-5">
      <div className="row">
        <div className="col-6">
          <img className="card-img-top img-fluid" src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`} height="300px" alt="#" />
        </div>
        <div className="col-6">
          <div className="card-body">
            <h4 className="card-title">{personaje.name}</h4>
            <p className="card-text">{personaje.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPersonajes;
