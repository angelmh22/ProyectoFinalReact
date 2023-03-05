import {
  NavLink, useLoaderData,
} from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import '../style.css';
import getPeliculas from '../services/peliculas';

export async function loader({ params }) {
  const peliculas = await getPeliculas(params.showId);
  if (!peliculas) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }
  return peliculas;
}

export default function FindShow() {
  const episodes = useLoaderData();
  return (
    <div className="contenedor">
      <div className="row">
        {episodes.map((episode) => (
          <Card className="carta" key={episode.id}>
            <NavLink
              to={`/episodes/${episode.id}`}
            >
              <Card.Img className="imagen" variant="top" src={episode.image ? episode.image.original : 'src\\img\\no-image.jpg'} />
              <Card.Body>
                <Card.Title className="texto-carta">{episode.name}</Card.Title>
              </Card.Body>
            </NavLink>
          </Card>
        ))}
      </div>
    </div>
  );
}
