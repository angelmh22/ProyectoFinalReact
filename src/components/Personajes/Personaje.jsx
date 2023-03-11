/* eslint-disable no-underscore-dangle */
/* eslint-disable react/react-in-jsx-scope */
import { useParams } from 'react-router-dom';
import { getPersonaje } from '../../services/personajes';

export async function loader({ params }) {
  const character = getPersonaje(params.getPersonajeId);
  if (!character) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }
  return character;
}

export default function Personaje() {
  const character = useParams();

  return (
    <main>
      <h2 id="carac-personaje">
        Características del personaje
      </h2>
      <p id="c-personaje">
        <p>
          - Nombre:
          {' '}
          {`${character._id}`}
        </p>
        <p>
          - Película en la que sale:
          {' '}
          {`${character.films}`}
        </p>

        {`${character.name}`}
        {`${character.imageUrl}`}
      </p>
    </main>
  );
}
