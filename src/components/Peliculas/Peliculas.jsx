// useState es una función que crea internamente una variable
// donde podremos almacenar el estado de nuestro componente
import React, { useState, useEffect } from 'react';
// nos permite crear enlaces de navegación dentro de nuestra aplicación
import { NavLink } from 'react-router-dom';
// nos da todos los personajes de la api
import { getPeliculas } from '../../services/peliculas';
// incorporamos el estilo de la index
import '../../index.css';

function Peliculas() {
  // se guarda la función para cambiar las peliculas
  const [peliculas, setPeliculas] = useState([]);
  // personajes que son el resultado de la busqueda
  const [peliculasFiltradas, setPeliculasFiltradas] = useState([]);

  // se ejecuta cuando abres la pagina
  useEffect(() => {
    // obtenemos los personajes de la api
    getPeliculas().then((films) => {
      // cargamos los personajes en la variable PersonajesFiltrados
      setPeliculas(films.characters.data);
      setPeliculasFiltradas(films.characters.data);
    });
  }, []);

  // handleChange se ejecuta cuando escribimos algo nuevo en el buscador
  // el cual sirve para actualizar el estado
  const handleChange = (event) => {
    // filtramos todos los personajes comparando su nombre con el que escribimos en el buscador
    const peliculasResultado = peliculas.filter((pelicula) =>
      pelicula.name.toUpperCase().includes(event.target.value.toUpperCase()));
    // cargamos los resultados de la busqueda en la variable de personajesFiltrados
    setPeliculasFiltradas(peliculasResultado);
  };

  // si todo ha ido bien nos retornará los personajes con el nombre y la imagen
  return (
    <div className="container mb-4">
      <div className="row">
        <input type="text" placeholder="Busca una Pelicula" className="form-control mt-4" onChange={handleChange} />
        {peliculasFiltradas.map((film, key) => (
          <div id={key} className="col-3 d-flex flex-wrap">
            <NavLink to={`${film.id}`} className="d-flex link-css">
              <div className="card shadow mt-4 text-center">
                <img src={`${film.imageUrl}`} width="300px" height="300px" alt="#" />
                <h4 className="card-title my-3">{film.name}</h4>
              </div>
            </NavLink>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Peliculas;
