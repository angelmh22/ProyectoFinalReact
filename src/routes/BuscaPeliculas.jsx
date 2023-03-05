import React from 'react';
import {
  useLoaderData,
} from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import { getPelicula } from '../services/peliculas';

export async function loader({ params }) {
  const pelicula = await getPelicula(params.episodeId);
  if (!pelicula) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }
  return pelicula;
}

export default function BuscaPelicula() {
  const pelicula = useLoaderData();

  return (
    <div className="contenedor">
      <div id="show">
        <div className="row">
          <div className="col-md-6">
            <img
              key={pelicula.id}
              src={pelicula.image.medium || null}
              alt=""
            />
          </div>
          <div className="col-md-6">
            <Tabs
              defaultActiveKey="info"
              id="justify-tab-example"
              className="mb-3"
              justify
            >
              <Tab eventKey="info" title="Informacion">
                <Table striped bordered hover>
                  <tbody>
                    <tr>
                      <td>Nombre</td>
                      <td>{pelicula.name}</td>
                    </tr>
                    <tr>
                      <td>Temporada</td>
                      <td>{pelicula.season}</td>
                    </tr>
                    <tr>
                      <td>Episodio</td>
                      <td>{pelicula.number}</td>
                    </tr>
                    <tr>
                      <td>Valoracion</td>
                      <td>{pelicula.rating.average}</td>
                    </tr>
                  </tbody>
                </Table>
              </Tab>
              <Tab eventKey="resumen" title="Resumen">
                <div dangerouslySetInnerHTML={{ __html: pelicula.summary }} />
              </Tab>
            </Tabs>

          </div>
        </div>
      </div>
    </div>
  );
}
