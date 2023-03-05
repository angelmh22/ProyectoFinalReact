import React from 'react';
import {
  useLoaderData,
} from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import { getPerson } from '../services/people';

export async function loader({ params }) {
  const personaje = await getPersonaje(params.personajesId);
  if (!personaje) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }
  return personaje;
}

export default function BuscaPersonaje() {
  const personaje = useLoaderData();

  return (
    <div id="contenedor">
      <div id="contact">
        <div className="row">
          <div className="col-md-6">
            <img
              key={personaje.id}
              src={personaje.image.medium || null}
              alt=""
            />
          </div>
          <div className="col-md-6">
            <Tabs
              defaultActiveKey="perfil"
              id="justify-tab-example"
              className="mb-3"
              justify
            >
              <Tab eventKey="perfil" title="Perfil">
                <Table striped bordered hover>
                  <tbody>
                    <tr>
                      <td>Nombre</td>
                      <td>{personaje.name}</td>
                    </tr>
                    <tr>
                      <td>Genero</td>
                      <td>{personaje.gender}</td>
                    </tr>
                    <tr>
                      <td>Pais</td>
                      <td>{personaje.country.name}</td>
                    </tr>
                    <tr>
                      <td>Fecha de Nacimiento</td>
                      <td>{personaje.birthday}</td>
                    </tr>
                  </tbody>
                </Table>
              </Tab>
              <Tab eventKey="profile" title="Mas Informacion">
                asdf
              </Tab>

            </Tabs>

          </div>
        </div>
      </div>
    </div>
  );
}
