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
  // declaramos el useState con un valor incial
  // para esa variable y devuelve un array con dos elementos
  // el valor de la variable y la función para modificarla
  const [personajes, setPersonajes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getPersonajes().then((characters) => setPersonajes(characters.data));
  }, []);

  // el handleChange se utiliza para actualizar el estado
  // será actualizado mientras escribimos (input)
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
