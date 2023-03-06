import React from 'react';
import { useRouteError } from 'react-router-dom';
// Declaramos una página de error para que aparezca en vez de un error por defecto
export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div id="error-page">
      <h1>¡Vaya!</h1>
      <p>Lo siento, se ha producido un error.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
