/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
// useState es una función que crea internamente una variable
// donde podremos almacenar el estado de nuestro componente
import React, { useState, useEffect } from 'react';
// nos permite crear enlaces de navegación dentro de nuestra aplicación
import { NavLink } from 'react-router-dom';
// nos da todos los personajes de la api
import { getPersonajes } from '../../services/personajes';
// incorporamos el estilo de la index
import '../../index.css';

function Personajes() {
  // se guarda la función para cambiar los personajes
  const [personajes, setPersonajes] = useState([]);
  // personajes que son el resultado de la busqueda
  const [personajesFiltrados, setPersonajesFiltrados] = useState([]);

  // se ejecuta cuando abres la pagina
  useEffect(() => {
    // obtenemos los personajes de la api
    getPersonajes().then((characters) => {
    // cargamos los personajes en la variable PersonajesFiltrados
      setPersonajes(characters.data);
      setPersonajesFiltrados(characters.data);
    });
  }, []);

  // handleChange se ejecuta cuando escribimos algo nuevo en el buscador
  // el cual sirve para actualizar el estado
  const handleChange = (event) => {
    // filtramos todos los personajes comparando su nombre con el que escribimos en el buscador
    const personajesResultado = personajes.filter((personaje) => personaje.name.toUpperCase().includes(event.target.value.toUpperCase()));
    // cargamos los resultados de la busqueda en la variable de personajesFiltrados
    setPersonajesFiltrados(personajesResultado);
  };

  // si todo ha ido bien nos retornará los personajes con el nombre y la imagen
  return (
    <div className="container mb-4">
      <div className="row">
        <input type="text" placeholder="Busca un Personaje" className="form-control mt-4" onChange={handleChange} />
        {personajesFiltrados.map((character, key) => (
          <div id={key} className="col-3 d-flex flex-wrap">
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
